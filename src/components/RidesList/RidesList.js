import styled from 'styled-components/macro'
import RidesListEntry from '../RidesListEntry/RidesListEntry'

export default function RidesList({ rides }) {
  return (
    <List aria-label="past rides">
      {rides
        .sort((a, b) => a.date < b.date)
        .map((ride, index) => (
          <ListItem key={ride.id}>
            <RidesListEntry ride={ride} index={rides.length - index} />
          </ListItem>
        ))}
    </List>
  )
}

const List = styled.ol`
  display: grid;
  gap: 10px;
  margin: 30px 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style-type: none;
`
