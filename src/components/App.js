import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../GlobalStyles'
import RideForm from './RideForm/RideForm'
import { v4 as uuidv4 } from 'uuid'
import RidesList from './RidesList/RidesList'

export default function App() {
  const [rides, setRides] = useState(getLocal('rides') ?? [])

  useEffect(() => {
    setLocal('rides', rides)
  }, [rides])

  return (
    <AppStyled>
      <GlobalStyles />
      <RideForm handleSubmit={addRide} />
      <RidesList rides={rides} />
    </AppStyled>
  )

  function addRide(e) {
    e.preventDefault()
    const formElements = e.target.elements
    const newRide = {
      id: uuidv4(),
      date: formElements.date.value,
      distance: formElements.distance.value,
      duration: formElements.duration.value,
    }
    setRides([newRide, ...rides])
  }

  function setLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function getLocal(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  }
}

const AppStyled = styled.div`
  padding: 40px;
`
