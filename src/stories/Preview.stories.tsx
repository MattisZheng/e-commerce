import { ComponentStory, ComponentMeta } from '@storybook/react';

import Preview from './Preview';

export default {
  title: 'Example/Preview',
  component: Preview,
} as ComponentMeta<typeof Preview>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
