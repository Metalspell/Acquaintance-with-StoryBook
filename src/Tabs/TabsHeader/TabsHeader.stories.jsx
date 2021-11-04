import React from 'react'

import { TabsHeader } from './TabsHeader'

export default {
  title: 'TabsHeader',
  component: TabsHeader,
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
    onTabClick: { action: 'clicked' },
  },
}

const Template = (args) => <TabsHeader {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'SoftSkils',
      onClick: () => console.log('SoftSkils clicked'),
    },
    {
      text: 'HardSkils',
      onClick: () => console.log('HardSkils clicked'),
    },
    {
      text: 'Education',
      onClick: () => console.log('Education clicked'),
    },
    {
      text: 'Contacts',
      onClick: () => console.log('Contacts clicked'),
    },
  ],
  activeIndex: 0,
}