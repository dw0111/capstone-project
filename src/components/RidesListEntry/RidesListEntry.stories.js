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
      date: '2021-01-01',
      distance: 43,
      duration: { hours: 3, minutes: 54, seconds: 2 },
    }}
    index="1"
  />
)

export const RidesListEntryStory = Template.bind({})
