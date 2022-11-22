import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBox from '../components/SearchBox';

export default {
  title: 'Example/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
