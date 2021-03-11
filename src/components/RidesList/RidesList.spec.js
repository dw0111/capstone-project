import { render, screen } from '@testing-library/react'
import RidesList from './RidesList'

describe('RidesList', () => {
  it('renders a list from a given array', () => {
    render(
      <RidesList
        rides={[
          {
            id: '1',
            date: '2021-01-01',
            distance: 43,
            duration: { hours: 3, minutes: 54, seconds: 2 },
          },
          {
            id: '2',
            date: '2021-01-02',
            distance: 43,
            duration: { hours: 3, minutes: 54, seconds: 2 },
          },
        ]}
      />
    )
    expect(screen.queryByRole('list')).toBeInTheDocument()
  })
})
