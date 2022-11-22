import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cookie from './Cookie';

export default {
  title: 'Components/Cookie',
  component: Cookie,
} as ComponentMeta<typeof Cookie>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Cookie> = (args) => <Cookie {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
