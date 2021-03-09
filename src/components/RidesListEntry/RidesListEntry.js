import styled from 'styled-components'

export default function RidesListEntry({ ride, index }) {
  const { date, distance, duration } = ride
  return (
    <Entry>
      <H2Styled>Ride {index}</H2Styled>
      <Stats>
        <dt>Date: </dt>
        <dd>{date}</dd>
        <dt>Distance: </dt>
        <dd>{distance}</dd>
        <dt>Duration: </dt>
        <dd>{duration}</dd>
      </Stats>
    </Entry>
  )
}

const Entry = styled.div`
  background: var(--dark);
  border-radius: 8px;
  padding: 20px;
  color: white;
  box-shadow: 0 0 4px var(--highlight);
`

const Stats = styled.dl`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
`

const H2Styled = styled.h2`
  grid-column: 1 / span 2;
  color: var(--highlight);
  margin: 10px 0;
  font-weight: normal;
`
