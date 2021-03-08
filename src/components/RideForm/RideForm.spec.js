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

  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(() => null),
    },
    writable: true,
  })

  it('does not allow to submit unless all fields are filled in', () => {
    render(<RideForm handleSubmit={window.localStorage.setItem} />)
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).not.toHaveBeenCalled()
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).not.toHaveBeenCalled()
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).toHaveBeenCalled()
  })

  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(() => null),
    },
    writable: true,
  })

  it('saves the input to local storage on submit', () => {
    render(
      <RideForm handleSubmit={ride => window.localStorage.setItem(ride)} />
    )
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).toHaveReturned()
  })
})
