import { render, screen } from '@testing-library/react'
import Total from './RidesTotal'

describe('Total', () => {
  it('shows the total amount of km and hrs ridden', () => {
    render(
      <Total
        rides={[
          {
            id: '1',
            date: '2021-01-01',
            distance: 43,
            duration: { hours: 3, minutes: 54, seconds: 2 },
          },
          {
            id: '2',
            date: '2021-01-02',
            distance: 43,
            duration: { hours: 3, minutes: 54, seconds: 2 },
          },
        ]}
      />
    )
    expect(
      screen.getByRole('definition', { name: 'total-distance' }).textContent
    ).toEqual('86 km')
    expect(
      screen.getByRole('definition', { name: 'total-duration' }).textContent
    ).toEqual('07 : 48 : 04')
  })
})
