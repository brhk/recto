import React from "react"

export function getInputEventValue(callBack: React.Dispatch<string>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    callBack(e.target.value)
  }
}
