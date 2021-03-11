import { render, screen } from '@testing-library/react'
import RidesListEntry from './RidesListEntry'

describe('RidesListEntry', () => {
  it('renders a card with data from a single ride', () => {
    render(
      <RidesListEntry
        ride={{
          date: '2021-01-01',
          distance: 43,
          duration: { hours: 3, minutes: 54, seconds: 2 },
        }}
      />
    )
    expect(screen.getByText(/date/i)).toBeInTheDocument()
    expect(screen.getByText(/distance/i)).toBeInTheDocument()
    expect(screen.getByText(/duration/i)).toBeInTheDocument()
  })
})
