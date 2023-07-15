import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';
import svg from 'rollup-plugin-svg-import';
import autoprefixer from 'autoprefixer';
import nano from 'cssnano';
import path from 'path';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs'
      },
      {
        file: packageJson.module,
        format: 'esm'
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist'
      }),
      // 👇 new
      postcss({
        plugins: [
          autoprefixer(),
          nano({ preset: ['default', { calc: false }] })
        ],
        autoModules: true,
        modules: {
          generateScopedName: (name, filename) => {
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
      svg(),
      svgr(),
      copy({ targets: [{ src: 'src/assets/styles/fonts', dest: 'dist' }] })
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/] //👈 new
  }
];
