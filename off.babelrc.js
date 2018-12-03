const isTest = String(process.env.NODE_ENV) === 'test'
module.exports = {
  presets: [['@babel/preset-env', { modules: isTest ? 'commonjs' : false }]],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    isTest ? 'babel-plugin-dynamic-import-node' : null,
  ],
}
