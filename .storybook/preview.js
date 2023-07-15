// import 'antd/dist/antd.min.css';
// import 'react-loading-skeleton/dist/skeleton.css';
import '../src/assets/styles/main.scss';
import './style.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    controls: { expanded: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'centered',
  backgrounds: { disable: true },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'theme--light', color: '#F2F2F2' },
      { name: 'dark', class: 'theme--dark', color: '#161624' }
    ]
  }
};
