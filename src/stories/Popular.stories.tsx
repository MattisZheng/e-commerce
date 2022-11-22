import { ComponentStory, ComponentMeta } from '@storybook/react';

import Popular from '../components/Popular';

export default {
  title: 'Components/Popular',
  component: Popular,
} as ComponentMeta<typeof Popular>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Popular> = (args) => <Popular {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
