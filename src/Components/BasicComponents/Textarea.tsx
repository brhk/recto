import React from "react"
import { Label } from "./Label"

export type ITextarea = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = function (props: ITextarea) {
  return <textarea {...props} />
}

export interface ILabeledTextarea extends ITextarea {
  label: string
  htmlFor?: string
  lClassName?: string
}

export const LabeledTextarea = function ({
  label,
  lClassName,
  htmlFor,
  ...props
}: ILabeledTextarea) {
  if (htmlFor) {
    return (
      <>
        <Label className={lClassName} htmlFor={htmlFor}>
          {label}
        </Label>
        <Textarea {...props} />
      </>
    )
  }

  return (
    <Label className={lClassName}>
      {label}
      <Textarea {...props} />
    </Label>
  )
}

export const TextareaMemo = React.memo(Textarea)
export const LabeledTextareaMemo = React.memo(LabeledTextarea)
