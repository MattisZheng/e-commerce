import { ComponentStory, ComponentMeta } from '@storybook/react';

import Product from '../components/Product';

export default {
  title: 'Components/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
