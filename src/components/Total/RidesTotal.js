import styled from 'styled-components/macro'
import { Container } from '../StyleComponents/Container'
import { Heading2 } from '../StyleComponents/Heading2'
import { RideStats } from '../StyleComponents/RideStats'

export default function RidesTotal({ rides }) {
  const { hours, minutes, seconds } = sumDurations(rides)
  const datetimeTotal = `PT${hours}H${minutes}M${seconds}S`

  return (
    <ContPlusMargin>
      <Heading2>Total</Heading2>
      <RideStats>
        <dt>Distance:</dt>
        <Data aria-label="total-distance">
          {`${rides.reduce((acc, curVal) => acc + curVal.distance, 0)} km`}
        </Data>
        <dt>Hrs in the saddle:</dt>
        <time
          dateTime={datetimeTotal}
          role="definition"
          aria-label="total-duration"
        >{`${hours.toString().padStart(2, 0)} : ${minutes
          .toString()
          .padStart(2, 0)} : ${seconds.toString().padStart(2, 0)}`}</time>
      </RideStats>
    </ContPlusMargin>
  )

  function sumDurations(rides) {
    function convertToSeconds(duration) {
      const seconds =
        duration.seconds + duration.minutes * 60 + duration.hours * 60 * 60
      return seconds
    }
    const reducer = (acc, curVal) => acc + convertToSeconds(curVal.duration)
    const secondsTotal = rides.reduce(reducer, 0)
    const hours = Math.floor(secondsTotal / 3600)
    const minutes = Math.floor((secondsTotal % 3600) / 60)
    const seconds = Math.floor((secondsTotal % 3600) % 60)
    return { hours, minutes, seconds }
  }
}

const ContPlusMargin = styled(Container)`
  margin-top: 30px;
`
const Data = styled.dd`
  margin: 0;
`
