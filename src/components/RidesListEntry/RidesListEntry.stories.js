import React from 'react'
import RidesListEntry from './RidesListEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'RidesListEntry',
  component: RidesListEntry,
}

const Template = () => (
  <RidesListEntry
    ride={{
      date: '01. Jan 2021',
      distance: '43 km',
      duration: '2 hrs 45 min',
    }}
    index="1"
  />
)

export const RidesListEntryStory = Template.bind({})
