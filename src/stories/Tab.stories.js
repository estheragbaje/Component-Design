import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Tab } from '@storybook/react/demo';

export default {
  title: 'Tab',
  component: Tab,
};

export const TabOne = () => <Tab showApp={linkTo('Button')} />;