import styled from 'styled-components'
import { Container } from '../StyleComponents/Container'
import { Heading2 } from '../StyleComponents/Heading2'
import { RideStats } from '../StyleComponents/RideStats'

export default function RidesListEntry({ ride, index }) {
  const { date, distance, duration } = ride
  const { hours, minutes, seconds } = duration
  return (
    <Container>
      <H2Styled>Ride {index}</H2Styled>
      <RideStats>
        <dt>Date: </dt>
        <Data>{date}</Data>
        <dt>Distance: </dt>
        <Data>{distance} km</Data>
        <dt>Duration: </dt>
        <Data>{`${hours
          .toString()
          .padStart(2, '0')} : ${minutes
          .toString()
          .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}</Data>
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
