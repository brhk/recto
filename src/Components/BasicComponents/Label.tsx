import React from "react"

export interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export const Label = function (props: ILabel) {
  return (
    <label {...props}>
      {props.children}
    </label>
  )
}

export const LabelMemo = React.memo(Label)
