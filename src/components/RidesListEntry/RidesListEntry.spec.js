import { render, screen } from '@testing-library/react'
import RidesListEntry from './RidesListEntry'

describe('RidesListEntry', () => {
  it('renders a card with data from a single ride', () => {
    render(
      <RidesListEntry
        ride={{
          date: '01. Jan 2021',
          distance: '43 km',
          duration: '2 hrs 45 min',
        }}
      />
    )
    expect(screen.getByText(/date/i)).toBeInTheDocument()
    expect(screen.getByText(/distance/i)).toBeInTheDocument()
    expect(screen.getByText(/duration/i)).toBeInTheDocument()
  })
})
