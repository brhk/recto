import React from "react"
import { Label } from "./Label"

export type IRadio = React.InputHTMLAttributes<HTMLInputElement>

export const Radio = function (props: IRadio) {
  return <input {...props} type="radio" />
}

export interface ILabeledRadio extends IRadio {
  label: string
  htmlFor?: string
  lClassName?: string
}

export const LabeledRadio = function ({
  label,
  lClassName,
  htmlFor,
  ...props
}: ILabeledRadio) {
  return (
    <>
      <Label className={lClassName} htmlFor={htmlFor}>
        {label}
      </Label>
      <Radio {...props} />
    </>
  )
}

export const RadioMemo = React.memo(Radio)
export const LabeledRadioMemo = React.memo(LabeledRadio)
