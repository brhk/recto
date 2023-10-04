import React, { useEffect, useState } from "react"
import { IDropdownData } from "../../BasicComponents/Dropdown"

export function CharacterDetails({ data }: { data: IDropdownData }) {
  const [characterData, setCharacterData] = useState({} as any)

  useEffect(
    function () {
      if (data?.value) {
        fetch(data.value)
          .then((res) => res.json())
          .then((res) => {
            console.log("char data ", res)
            setCharacterData(res)
          })
      }
    },
    [data]
  )

  if (!data) {
    return <></>
  }

  return (
    <ul>
      {characterData?.abilities?.map(function (ability: any) {
        console.log("ability ", ability)
        return <li>{ability.ability.name}</li>
      })}
    </ul>
  )
}
