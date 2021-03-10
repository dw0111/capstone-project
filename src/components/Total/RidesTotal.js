import styled from 'styled-components'
import { Container } from '../StyleComponents/Container'
import { Heading2 } from '../StyleComponents/Heading2'
import { RideStats } from '../StyleComponents/RideStats'

export default function RidesTotal({ rides }) {
  return (
    <ContPlusMargin>
      <Heading2>Total</Heading2>
      <RideStats>
        <dt>Distance:</dt>
        <Data>
          {`
          ${rides
            .map(ride => ride.distance)
            .reduce((acc, curVal) => acc + curVal, 0)}
           km`}
        </Data>
        <dt>Hrs in the saddle:</dt>
        <time dateTime="PT7H29M0S">7 h 29 min</time>
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
