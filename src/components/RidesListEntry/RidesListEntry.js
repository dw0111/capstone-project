import styled from 'styled-components'

export default function RidesListEntry({ ride, index }) {
  const { date, distance, duration } = ride
  return (
    <DivStyled>
      <H2Styled>Ride {index}</H2Styled>
      <span>Date: </span>
      <span>{date}</span>
      <span>Distance: </span>
      <span>{distance}</span>
      <span>Duration: </span>
      <span>{duration}</span>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  background: var(--dark);
  border-radius: 8px;
  padding: 20px;
  color: white;
  box-shadow: 0 0 4px var(--highlight);
`
const H2Styled = styled.h2`
  grid-column: 1 / span 2;
  color: var(--highlight);
  margin: 0;
  font-weight: normal;
`
