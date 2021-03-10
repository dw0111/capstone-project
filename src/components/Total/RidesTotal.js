import styled from 'styled-components'
import { Container } from '../StyleComponents/Container'
import { Heading2 } from '../StyleComponents/Heading2'
import { RideStats } from '../StyleComponents/RideStats'

export default function RidesTotal({ rides }) {
  return (
    <ContPlusMargin>
      <Heading2>Total</Heading2>
      <RideStats>
        <dt>Km ridden:</dt>
        <Data>86 km</Data>
        <dt>Hrs in the saddle:</dt>
        <Data>7 h 29 min</Data>
      </RideStats>
    </ContPlusMargin>
  )
}

const ContPlusMargin = styled(Container)`
  margin-top: 30px;
`
const Data = styled.dd`
  margin: 0;
`
