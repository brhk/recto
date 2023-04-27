import React, { memo } from "react"
import { Input } from "reactstrap"
import { isEmpty } from "lodash"
import { InputType } from "reactstrap/types/lib/Input"
import { IRenderifyRowProps, RenderifyRow } from "../RenderifyRow"

export interface ILabel {
  title: string
  className?: string
}

export interface InputFieldProps extends IRenderifyRowProps {
  className?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  error?: string
  label?: ILabel
  type?: InputType
  placeholder?: string
  renderifyRow?: boolean
  disabled?: boolean
}

const InputFieldBase = function ({ className, label, type = "text", error, placeholder, onChange, value, disabled }: InputFieldProps) {
  if (isEmpty(label)) {
    return <div className="w-100">
      <Input className={className} placeholder={placeholder} type={type} value={value} onChange={onChange} disabled={disabled} />
      {error && <span className="flex-align text-danger">{error}</span>}
    </div>
  }

  return (
    <>
      <label className={(label as ILabel).className || ""}>
        {(label as ILabel).title}
      </label>

      <Input className={className} placeholder={placeholder} type={type} value={value} onChange={onChange} disabled={disabled} />
      {error && <span className="flex-align text-danger">{error}</span>}
    </>
  )
}

export const InputField = memo(function ({ className, label, type, error, placeholder, onChange, value, row, col, renderifyRow, disabled }: InputFieldProps) {
  if (!isEmpty(row) || renderifyRow) {
    return (
      <RenderifyRow row={row} col={col}>
        <InputFieldBase label={label} type={type} className={className} onChange={onChange} value={value} placeholder={placeholder} error={error} disabled={disabled} />
      </RenderifyRow>
    )
  }

  return <InputFieldBase label={label} type={type} className={className} onChange={onChange} value={value} placeholder={placeholder} error={error} disabled={disabled} />
})

