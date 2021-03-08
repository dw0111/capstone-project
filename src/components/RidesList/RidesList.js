import styled from 'styled-components'

export default function RidesList({ rides }) {
  return (
    <DlStyled role="list">
      {rides.map((ride, index) => (
        <div key={ride.id}>
          <DtStyled>{`Ride ${rides.length - index}`}</DtStyled>
          <DdStyled>
            <span>Date: </span>
            <span>{ride.date}</span>
          </DdStyled>
          <DdStyled>
            <span>Distance: </span>
            <span>{ride.distance}</span>
          </DdStyled>
          <DdStyled>
            <span>Duration: </span>
            <span>{ride.duration}</span>
          </DdStyled>
        </div>
      ))}
    </DlStyled>
  )
}

const DlStyled = styled.dl`
  display: grid;
  gap: 10px;
  margin-top: 30px;
`

const DtStyled = styled.dt`
  color: var(--dark);
  font-size: 115%;
  margin-top: 15px;
`

const DdStyled = styled.dd`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
