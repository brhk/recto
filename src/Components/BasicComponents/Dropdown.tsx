import React, { MouseEventHandler } from "react"
// export type IInput = React.InputHTMLAttributes<HTMLInputElement>

export type IOption = React.OptionHTMLAttributes<HTMLOptionElement>

export interface IDropdown extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: IOption[]
  onOptionClick: (d: IOption) => (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => void
}

export interface IDropdownData { 
  label: string
  value: string
}

export function Dropdown({ data, onOptionClick }: IDropdown) {
  return (
    <select>
      {data.map(function (props) {
        return <option {...props} onClick={onOptionClick(props)}>{props.label}</option>
      })}
    </select>
  )
}
