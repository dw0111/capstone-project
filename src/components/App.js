import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../GlobalStyles'
import RideForm from './RideForm/RideForm'
import { v4 as uuidv4 } from 'uuid'
import RidesList from './RidesList/RidesList'
import setLocal from '../lib/setLocal'
import getLocal from '../lib/getLocal'

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
}

const AppStyled = styled.div`
  padding: 30px;
`
