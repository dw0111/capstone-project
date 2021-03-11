import React from 'react'
import styled from 'styled-components/macro'

export default function RideForm({ onSubmit }) {
  return (
    <FormStyled aria-label="add ride" onSubmit={e => handleSubmit(e)}>
      <LabelStyled>
        Date
        <input type="date" name="date" required />
      </LabelStyled>
      <LabelStyled>
        Distance
        <NumberInput>
          <NoSpinners
            name="distance"
            aria-label="distance"
            type="number"
            min="0"
            step="0.01"
            placeholder="00"
            align="start"
            required
          />
          km
        </NumberInput>
      </LabelStyled>
      <DurationFieldset>
        <DurationLegend>Duration</DurationLegend>
        <NumberInput>
          <label>
            <NoSpinners
              name="hours"
              type="number"
              min="0"
              step="1"
              placeholder="00"
            />
            h
          </label>
          <label>
            <NoSpinners
              name="minutes"
              type="number"
              min="0"
              step="1"
              placeholder="00"
              required
            />
            m
          </label>
          <label>
            <NoSpinners
              name="seconds"
              type="number"
              max="59"
              min="0"
              step="1"
              placeholder="00"
            />
            s
          </label>
        </NumberInput>
      </DurationFieldset>
      <ButtonStyled>Send it!</ButtonStyled>
    </FormStyled>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const formElements = e.target.elements
    const rideData = {
      date: formElements.date.value,
      distance: Number(formElements.distance.value),
      duration: {
        hours: Number(formElements.hours.value),
        minutes: Number(formElements.minutes.value),
        seconds: Number(formElements.seconds.value),
      },
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
  align-items: center;
`
const DurationFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`

const DurationLegend = styled.legend`
  float: left;
`

const ButtonStyled = styled.button`
  width: 100%;
  font-size: 120%;
  box-shadow: 0 0 4px var(--highlight);
`
const NumberInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 3px;
  background: white;
  border: 1px solid #3f4739;
  border-radius: 4px;
  flex-grow: fit-content;
  width: 60%;
  color: #acacac;
  font-size: 60%;
`

const NoSpinners = styled.input`
  &:-webkit-outer-spin-button,
  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
  border: none;
  width: 80%;
  text-align: ${props => props.align || 'end'};
`
