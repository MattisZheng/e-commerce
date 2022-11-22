import { ComponentStory, ComponentMeta } from '@storybook/react';

import Recommendation from '../components/Recommendation';

export default {
  title: 'Components/Recommendation',
  component: Recommendation,
} as ComponentMeta<typeof Recommendation>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Recommendation> = (args) => <Recommendation {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
