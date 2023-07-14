import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Comfi UI KIT',
  brandUrl: ''
});

addons.setConfig({
  theme,
  centered: true,
  showPanel: true,
  panelPosition: 'right',
  selectedPanel: 'addon-controls'
});
