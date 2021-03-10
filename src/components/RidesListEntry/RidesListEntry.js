import styled from 'styled-components'
import { Container } from '../StyleComponents/Container'
import { Heading2 } from '../StyleComponents/Heading2'
import { RideStats } from '../StyleComponents/RideStats'

export default function RidesListEntry({ ride, index }) {
  const { date, distance, duration } = ride
  return (
    <Container>
      <H2Styled>Ride {index}</H2Styled>
      <RideStats>
        <dt>Date: </dt>
        <Data>{date}</Data>
        <dt>Distance: </dt>
        <Data>{distance}</Data>
        <dt>Duration: </dt>
        <Data>{duration}</Data>
      </RideStats>
    </Container>
  )
}

const H2Styled = styled(Heading2)`
  grid-column: 1 / span 2;
`
const Data = styled.dd`
  margin: 0;
`
