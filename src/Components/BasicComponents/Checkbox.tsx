import React from "react"
import { Label } from "./Label"

export interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Checkbox = function (props: ICheckbox) {
  return <input {...props} type="checkbox" />
}

export interface ILabeledCheckbox extends ICheckbox {
  label: string
  htmlFor?: string
  lClassName?: string
}

export const LabeledCheckbox = function ({ label, lClassName, htmlFor, ...props }: ILabeledCheckbox) {
  return (
    <>
      <Label className={lClassName} htmlFor={htmlFor}>{label}</Label>
      <Checkbox {...props} />
    </>
  )
}

export const CheckboxMemo = React.memo(Checkbox)
export const LabeledCheckboxMemo = React.memo(LabeledCheckbox)
