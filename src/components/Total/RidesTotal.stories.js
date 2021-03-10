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

export const RidesTotalStory = Template.bind({})
