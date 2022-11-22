import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '../layouts/Footer';

export default {
  title: 'Layouts/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
