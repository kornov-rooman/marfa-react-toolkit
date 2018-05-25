import { withConsole } from '@storybook/addon-console';
import { setDefaults as setInfoDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';

import 'semantic-ui-css/semantic.min.css';


setInfoDefaults({
    header: false,
    inline: false,
    styles: {
        button: {
            base: {
                zIndex: 5000,
            }
        },
        children: {
            position: 'inherit',
            zIndex: 0,
        },
    }
});

setOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

function loadStories() {
    require('../stories/index');
}

configure(loadStories, module);
