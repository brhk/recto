import React, { useEffect, useState } from "react"
import { Dropdown, IDropdownData } from "../Components/BasicComponents/Dropdown"
import { CharacterDetails } from "../Components/Templates/Pokemon/CharacterDetails"

export function PokemonDashboard() {
  const [charecter, setCharecter] = useState([])
  const [selectedCharecter, setSelectedCharecter] = useState({} as IDropdownData)

  useEffect(function () {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((res) => {
        console.log("res ", res)
        const characters = res?.results?.map(function (r: any) {
          return { label: r.name, value: r.url }
        })
        setCharecter(characters)
      })
  }, [])

  const onDropdownOptionClick = function (character: any) {
    return function () {
      console.log("onDropdownOptionClick ", character)
      setSelectedCharecter(character)
    }
  }

  return (
    <>
      <Dropdown data={charecter} onOptionClick={onDropdownOptionClick} />
      <CharacterDetails data={selectedCharecter} />
      {/* <Something/> */}
      {/* <InlineMath math="\int_0^\infty x^2 dx"/> */}
      {/* <BlockMath math="\int_0^\infty x^2 dx"/> */}
    </>
  )
}
