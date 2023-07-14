import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import nano from 'cssnano';
import path from 'path';
import { RollupOptions } from 'rollup';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg-import';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import ts from 'typescript';

import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = ['.stories.tsx', 'test.tsx'];

const options: RollupOptions[] = [
  {
    input: [
      './src/index.ts',
      ...getFiles('./src/components', extensions, excludeExtensions)
    ],
    output: {
      dir: 'lib',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'lib'
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        plugins: [
          autoprefixer(),
          nano({ preset: ['default', { calc: false }] })
        ],
        autoModules: true,
        modules: {
          generateScopedName: (name: string, filename: string) => {
            const scope = path
              .basename(filename, '.css')
              .replace('.module.scss', '');

            return `${scope}_${name}`;
          }
        },
        inject: false,
        extract: true
      }),
      terser(),
      typescript({
        typescript: ts,
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
        declaration: true,
        declarationDir: 'lib',
        compilerOptions: {
          rootDir: 'src'
        },
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.stories.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          '**/*.stories.tsx',
          'node_modules',
          'lib'
        ]
      }),
      visualizer({
        filename: 'bundle-analysis.html',
        open: false
      }),
      svg(),
      svgr(),
      copy({ targets: [{ src: 'src/assets/styles/fonts', dest: 'lib' }] })
    ],
    external: [
      'react',
      'react-dom',
      'classnames',
      'lodash',
      'antd',
      'dayjs',
      'react-hook-form',
      'react-loading-skeleton',
      'react-phone-input-2',
      'react-auth-code-input',
      'react-number-format',
      'react-color'
    ]
  },
  {
    input: './src/assets/styles/main.scss',
    output: {
      file: 'lib/globals.css',
      format: 'es'
    },
    plugins: [
      postcss({
        plugins: [
          autoprefixer(),
          nano({ preset: ['default', { normalizeUrl: false }] })
        ],
        extract: true,
        inject: false
      })
    ]
  }
];

export default options;
