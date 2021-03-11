import React from 'react'
import RidesList from './RidesList'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'RidesList',
  component: RidesList,
}

const Template = () => (
  <RidesList
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

export const RidesListStory = Template.bind({})
