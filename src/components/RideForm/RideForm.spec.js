import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RideForm from './RideForm'

describe('RideForm', () => {
  it('renders a form with three label-input combinations and a button', () => {
    render(<RideForm />)
    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/distance/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/duration/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('contains only required fields', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    expect(screen.getByLabelText(/date/i)).toBeRequired()
    expect(screen.getByLabelText(/distance/i)).toBeRequired()
    expect(screen.getByLabelText(/duration/i)).toBeRequired()
  })

  it('calls onSubmit-callback with form data', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    userEvent.type(screen.getByLabelText(/date/i), '2021-03-01')
    userEvent.type(screen.getByLabelText(/distance/i), '43 km')
    userEvent.type(screen.getByLabelText(/duration/i), '2 hrs 45 min')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      date: '2021-03-01',
      distance: '43 km',
      duration: '2 hrs 45 min',
    })
  })
})
