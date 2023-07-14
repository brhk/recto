import React from "react"

export type ILabel = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = function (props: ILabel) {
  return <label {...props}>{props.children}</label>
}

export const LabelMemo = React.memo(Label)
