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
        date: '01. Jan 2021',
        distance: '43 km',
        duration: '2 hrs 45 min',
      },
      {
        date: '01. Jan 2021',
        distance: '43 km',
        duration: '2 hrs 45 min',
      },
    ]}
  />
)

export const RidesListStory = Template.bind({})
