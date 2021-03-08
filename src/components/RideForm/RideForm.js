import React from 'react'
import styled from 'styled-components/macro'

export default function RideForm({ handleSubmit }) {
  return (
    <FormStyled onSubmit={e => handleSubmit(e)}>
      <LabelStyled>
        Date
        <input name="date" placeholder="01. Jan 2021"></input>
      </LabelStyled>
      <LabelStyled>
        Distance
        <input name="distance" placeholder=" 42 km"></input>
      </LabelStyled>
      <LabelStyled>
        Duration
        <input name="duration" placeholder="2 h 31 min"></input>
      </LabelStyled>
      <ButtonStyled>Send it!</ButtonStyled>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;
`
const LabelStyled = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled.button`
  width: 100%;
  font-size: 120%;
`
