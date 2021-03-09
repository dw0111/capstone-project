import styled from 'styled-components'
import RidesListEntry from '../RidesListEntry/RidesListEntry'

export default function RidesList({ rides }) {
  return (
    <OlStyled role="list">
      {rides.map((ride, index) => (
        <LiStyled key={ride.id}>
          <RidesListEntry ride={ride} index={rides.length - index} />
        </LiStyled>
      ))}
    </OlStyled>
  )
}

const OlStyled = styled.ol`
  display: grid;
  gap: 10px;
  padding: 30px 0;
`

const LiStyled = styled.li`
  list-style-type: none;
`
