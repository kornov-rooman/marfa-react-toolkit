import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { Root } from 'features/Root';


const stories = storiesOf('Common|Root', module);

stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('default', () => <Root />);
