import { render, screen } from '@testing-library/react'
import Total from './RidesTotal'

describe('Total', () => {
  it.todo('shows the total amount of km and hrs ridden', () => {
    render(
      <Total
        rides={[
          {
            id: '1',
            date: '01. Jan 2021',
            distance: '43 km',
            duration: '2 hrs 45 min',
          },
          {
            id: '2',
            date: '02. Jan 2021',
            distance: '43 km',
            duration: '2 hrs 45 min',
          },
        ]}
      />
    )
    expect(screen.getByRole()).toBeInTheDocument()
  })
})
