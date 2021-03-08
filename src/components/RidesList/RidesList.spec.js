import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('RidesList', () => {
  it('renders a list', () => {
    render(<RidesList />)
    expect(screen.queryAllByRole('list')).toBeInTheDocument()
  })

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
    },
    writable: true,
  })

  it('gets its data from localStorage when rendering', () => {
    render(<RidesList />)
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  })

  it('updates the list when a new entry is added', () => {
    render(<RideForm />)
    render(<RidesList />)
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
  })
})
