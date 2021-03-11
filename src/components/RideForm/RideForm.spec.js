import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RideForm from './RideForm'

describe('RideForm', () => {
  it('renders a form with two label-input combinations a fieldset and a button', () => {
    render(<RideForm />)
    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/distance/i)).toBeInTheDocument()
    expect(screen.getByRole(/group/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('contains three required fields - date, distance and minutes', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    expect(screen.getByLabelText(/date/i)).toBeRequired()
    expect(screen.getByLabelText(/distance/i)).toBeRequired()
    expect(screen.getByRole('spinbutton', { name: 'm' })).toBeRequired()
  })

  it('calls onSubmit-callback with form data', () => {
    const callback = jest.fn()
    render(<RideForm onSubmit={callback} />)
    userEvent.type(screen.getByLabelText(/date/i), '2021-03-01')

    userEvent.type(screen.getByRole('spinbutton', { name: 'distance' }), '43')

    userEvent.type(screen.getByRole('spinbutton', { name: 'h' }), '2')
    userEvent.type(screen.getByRole('spinbutton', { name: 'm' }), '45')
    userEvent.type(screen.getByRole('spinbutton', { name: 's' }), '6')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      date: '2021-03-01',
      distance: 43,
      duration: { hours: 2, minutes: 45, seconds: 6 },
    })
  })
})
