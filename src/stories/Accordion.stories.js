import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Accordion } from '@storybook/react/demo';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const AccordionOpen = () => <Accordion showApp={linkTo('Button')} />;