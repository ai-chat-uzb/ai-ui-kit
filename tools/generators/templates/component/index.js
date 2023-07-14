/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../../utils/componentExists');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value, 'components')
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    }
  ],
  actions: data => {
    return [
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: './templates/component/Component.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: './templates/component/Component.stories.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.module.scss',
        templateFile: './templates/component/Component.module.scss.hbs',
        abortOnFail: true
      },
      // {
      //   type: 'add',
      //   path: '../../src/components/{{kebabCase name}}/index.ts',
      //   templateFile: './templates/component/index.tsx.hbs',
      //   abortOnFail: true
      // },
      {
        type: 'append',
        path: '../../src/components/index.ts',
        templateFile: './templates/component/ComponentList.hbs',
        abortOnFail: true
      }
    ];
  }
};
