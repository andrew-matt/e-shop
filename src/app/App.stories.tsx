import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { App } from 'app/App';

export default {
  title: 'App story',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = args => <App {...args} />;

export const AppRender = Template.bind({});
AppRender.args = {
  primary: true,
  label: 'App',
};
