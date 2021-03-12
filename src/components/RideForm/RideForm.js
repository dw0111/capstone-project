import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '../StyleComponents/Container'

export default function RideForm({ onSubmit }) {
  return (
    <Form as="form" aria-label="add ride" onSubmit={e => handleSubmit(e)}>
      <Label>
        Date
        <input type="date" name="date" required />
      </Label>
      <Label>
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
      </Label>
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
      <Button>Send it!</Button>
    </Form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const formElements = e.target.elements
    const rideData = {
      date: formElements.date.value,
      distance: Number(formElements.distance.value),
      duration: {
        hours: Number(formElements.hours.value) ?? 0,
        minutes: Number(formElements.minutes.value),
        seconds: Number(formElements.seconds.value) ?? 0,
      },
    }

    onSubmit(rideData)
  }
}

const Form = styled(Container)`
  display: grid;
  justify-items: center;
  gap: 20px;
`
const Label = styled.label`
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

const Button = styled.button`
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
