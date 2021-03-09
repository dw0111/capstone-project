import React from 'react'
import styled from 'styled-components/macro'

export default function RideForm({ onSubmit }) {
  return (
    <FormStyled aria-label="add ride" onSubmit={e => handleSubmit(e)}>
      <LabelStyled>
        Date
        <input type="date" name="date" placeholder="01. Jan 2021" required />
      </LabelStyled>
      <LabelStyled>
        Distance
        <input name="distance" placeholder=" 42 km" required />
      </LabelStyled>
      <LabelStyled>
        Duration
        <input name="duration" placeholder="2 h 31 min" required />
      </LabelStyled>
      <ButtonStyled>Send it!</ButtonStyled>
    </FormStyled>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const formElements = e.target.elements
    const rideData = {
      date: formElements.date.value,
      distance: formElements.distance.value,
      duration: formElements.duration.value,
    }

    onSubmit(rideData)
  }
}

const FormStyled = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;
  background: var(--dark);
  border-radius: 8px;
  padding: 20px;
  color: white;
  box-shadow: 0 0 4px var(--highlight);
`
const LabelStyled = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled.button`
  width: 100%;
  font-size: 120%;
  box-shadow: 0 0 4px var(--highlight);
`
