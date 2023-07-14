import React from "react"
import { Label } from "./Label"

export type IInput = React.InputHTMLAttributes<HTMLInputElement>

export const Input = function (props: IInput) {
  return <input {...props} />
}

export interface ILabeledInput extends IInput {
  label: string
  htmlFor?: string
  lClassName?: string
}

export const LabeledInput = function ({
  label,
  lClassName,
  htmlFor,
  ...props
}: ILabeledInput) {
  if (htmlFor) {
    return (
      <>
        <Label className={lClassName} htmlFor={htmlFor}>
          {label}
        </Label>
        <Input {...props} />
      </>
    )
  }

  return (
    <Label className={lClassName}>
      {label}
      <Input {...props} />
    </Label>
  )
}

export const InputMemo = React.memo(Input)
export const LabeledInputMemo = React.memo(LabeledInput)
