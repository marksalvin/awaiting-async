import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

const plugins = [
  nodeResolve(),
  commonjs(),
  babel(babelrc()),
  istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }),
];

const external = [
  {
    dest: pkg.main,
    format: 'umd',
    moduleId: 'awaiting-async',
    moduleName: 'awaitingAsync',
    sourceMap: true
  },
  {
    dest: pkg.module,
    format: 'es',
    sourceMap: true
  },
  {
    dest: pkg.cjs,
    format: 'cjs',
    sourceMap: true
  },
];

export default {
  entry: './lib/index.js',
  external,
  plugins,
  targets,
};
