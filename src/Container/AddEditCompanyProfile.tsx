import React, { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container } from "reactstrap"
import { InputField } from "../Components/BasicComponents/input-fields/InputField"

interface ICompany {
  name: string,
  address: string,
  noOfEmp: string,
}

// type CompanySessionStorage = {
//   signUp: "CompanySignUpData"
// }

const onChangeWrapper = function (callback: Function) {
  return function (e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    callback(value)
  }
}

const storeCompanyState = function ({ data }: { data: ICompany }) {
  sessionStorage.setItem("companyFields", JSON.stringify(data))
}

const getStoredCompanyState = function () {
  const data = sessionStorage.getItem("companyFields")
  return data ? JSON.parse(data) : {}
}
const hookClearSessionDataDataOnReload = function () {
  window.onbeforeunload = function () {
    console.log("AddEditCompanyProfileBase onbeforeunload")
    sessionStorage.removeItem("companyFields")
  }
}

const initializeCompayFields = function () {
  console.log("Called initializeCompayFields ")
  const prevState = getStoredCompanyState()

  console.log("prevState ", prevState)
  const [name, setName] = useState(prevState.name || "")
  const [address, setAddress] = useState(prevState.address || "")
  const [noOfEmp, setNoOfEmp] = useState(prevState.noOfEmp || "")

  return {
    name,
    setName,
    address,
    setAddress,
    noOfEmp,
    setNoOfEmp
  }
}

function AddEditCompanyProfileBase() {
  hookClearSessionDataDataOnReload()
  const navigate = useNavigate()

  const {
    name,
    setName,
    address,
    setAddress,
    noOfEmp,
    setNoOfEmp
  } = initializeCompayFields()

  const onSubmit = function () {
    storeCompanyState({ data: { name, address, noOfEmp } })
    return navigate("/")
  }

  console.log({
    name,
    setName,
    address,
    setAddress,
    noOfEmp,
    setNoOfEmp
  })

  const defaulInputProps = useMemo(() => {
    const style = {
      row: { className: "flex-align mt-3 d-flex align-items-end" },
      col: { md: 12 },
    }
    return {
      name: {
        ...style,
        label: { title: "Name" },
        onChange: onChangeWrapper(setName),
      },
      address: {
        ...style,
        label: { title: "Address" },
        onChange: onChangeWrapper(setAddress),
      },
      noOfEmp: {
        ...style,
        label: { title: "No. of Employees" },
        onChange: onChangeWrapper(setNoOfEmp),
      }
    }
  }, [])

  const NameInputFieldProps = useMemo(() => {
    return {
      ...defaulInputProps.name,
      value: name
    }
  }, [name])

  const AddressInputFieldProps = useMemo(() => {
    return {
      ...defaulInputProps.address,
      value: address
    }
  }, [address])

  const NoOfEmpInputFieldProps = useMemo(() => {
    return {
      ...defaulInputProps.noOfEmp,
      value: noOfEmp
    }
  }, [noOfEmp])

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <InputField {...NameInputFieldProps} />
        <InputField {...AddressInputFieldProps} />
        <InputField {...NoOfEmpInputFieldProps} />
        <Button onClick={() => onSubmit()}>Save</Button>
      </Container>
    </>
  )
}

export const AddEditCompanyProfile = AddEditCompanyProfileBase
