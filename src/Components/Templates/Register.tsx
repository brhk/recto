import React, { useState } from "react"
import { getInputEventValue } from "../../Utils/Helpers"
import { Button } from "../BasicComponents/Button"
import { LabeledInput } from "../BasicComponents/Input"

export function RegisterTemplate() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onNameChange = getInputEventValue(setName)
  const onEmailChange = getInputEventValue(setEmail)
  const onPhoneChange = getInputEventValue(setPhone)

  const onRegisterClick = function () {
    console.log({ name, email, phone })
  }

  return (
    <div>
      <LabeledInput
        label="Name"
        value={name}
        placeholder="Enter full name"
        onChange={onNameChange}
      />
      <LabeledInput
        label="Email"
        value={email}
        placeholder="example@yahoo.com"
        onChange={onEmailChange}
      />
      <LabeledInput
        label="Phone"
        value={phone}
        placeholder="+91 1236547890"
        onChange={onPhoneChange}
      />
      <Button onClick={onRegisterClick}>Regitster</Button>
    </div>
  )
}
