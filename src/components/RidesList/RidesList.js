import styled from 'styled-components'
import RidesListEntry from '../RidesListEntry/RidesListEntry'

export default function RidesList({ rides }) {
  return (
    <ListStyled role="list">
      {rides.map((ride, index) => (
        <ListItem key={ride.id}>
          <RidesListEntry ride={ride} index={rides.length - index} />
        </ListItem>
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ol`
  display: grid;
  gap: 10px;
  padding: 30px 0;
`

const ListItem = styled.li`
  list-style-type: none;
`
