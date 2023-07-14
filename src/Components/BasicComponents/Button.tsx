import React from "react"

export type IButton = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = function (props: IButton) {
  return <button {...props}>{props.children}</button>
}

export const ButtonMemo = React.memo(Button)
