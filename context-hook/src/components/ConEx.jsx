import React from 'react'
import { Data } from '../App'
import { useContext } from 'react'

const ConEx = () => {

  const name = useContext(Data)
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default ConEx