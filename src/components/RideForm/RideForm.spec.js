import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RideForm from './RideForm'

describe('RideForm', () => {
  it('renders a form with three label-input combinations and a button', () => {
    render(<RideForm />)
    expect(screen.queryByRole('form')).toBeInTheDocument()
    expect(screen.queryByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/distance/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/duration/i)).toBeInTheDocument()
    expect(screen.queryByRole('button')).toBeInTheDocument()
  })
  it('does not allow to submit unless all fields are filled in', () => {
    render(<RideForm />)
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    expect(screen.queryByRole('button')).toBeDisabled()
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    expect(screen.queryByRole('button')).toBeDisabled()
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    expect(screen.queryByRole('button')).toBeEnabled()
  })

  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(() => null),
    },
    writable: true,
  })

  it('saves the input to local storage on submit', () => {
    render(<RideForm />)
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith({
      date: '01. Jan 2021',
      distance: '43 km',
      duration: '2 hrs 45 min',
    })
  })
})
