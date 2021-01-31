
module.exports = {
  entry: `${__dirname}/client/src/index.js`,
  mode: 'development',
  output: {
    path: `${__dirname}/client/dist`,
    filename: 'bundle.js',
  },
  watch: true,
};