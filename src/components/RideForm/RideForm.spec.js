import { render, screen } from '@testing-library/react'
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

  it('contains three required fields - date, distance and minutes', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    expect(screen.getByLabelText(/date/i)).toBeRequired()
    expect(screen.getByLabelText(/distance/i)).toBeRequired()
    expect(screen.getByRole('spinbutton', { name: 'minutes' })).toBeRequired()
  })

  it('calls onSubmit-callback with form data', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    userEvent.type(screen.getByLabelText(/date/i), '2021-03-01')
    userEvent.type(
      screen.getByLabelText(/distance/i, { name: 'distance' }),
      '43'
    )
    userEvent.type(screen.getByRole('spinbutton', { name: 'hours' }), '2')
    userEvent.type(screen.getByRole('spinbutton', { name: 'minutes' }), '45')
    userEvent.type(screen.getByRole('spinbutton', { name: 'seconds' }), '6')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      date: '2021-03-01',
      distance: 43,
      duration: { hours: 2, minutes: 45, seconds: 6 },
    })
  })
})
