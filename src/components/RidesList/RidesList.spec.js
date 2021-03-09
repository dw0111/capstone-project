import { render, screen } from '@testing-library/react'
import RidesList from './RidesList'

describe('RidesList', () => {
  it('renders a list from a given array', () => {
    render(
      <RidesList
        rides={[
          {
            date: '01. Jan 2021',
            distance: '43 km',
            duration: '2 hrs 45 min',
          },
        ]}
      />
    )
    expect(screen.queryByRole('list')).toBeInTheDocument()
  })
})
