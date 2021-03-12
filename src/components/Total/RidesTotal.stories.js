import React from 'react'
import RidesTotal from './RidesTotal'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'RidesTotal',
  component: RidesTotal,
}

const Template = () => (
  <RidesTotal
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

export const RidesTotalStory = Template.bind({})
