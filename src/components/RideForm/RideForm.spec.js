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

  it('contains only required fields', () => {
    render(<RideForm handleSubmit={global.Storage.prototype.setItem} />)
    expect(screen.getByLabelText(/date/i)).toBeRequired()
    expect(screen.getByLabelText(/distance/i)).toBeRequired()
    expect(screen.getByLabelText(/duration/i)).toBeRequired()
  })

  it('saves the input to local storage on submit', () => {
    render(<RideForm handleSubmit={global.Storage.prototype.setItem} />)
    userEvent.type(screen.getByLabelText(/date/i), '01. Jan 2021')
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.queryByRole('button'))
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
  })
})
