import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: './lib/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(babelrc()),
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })
  ],
  external: external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'awaiting-async',
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
    }
  ]
};
