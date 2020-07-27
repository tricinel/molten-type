module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    cssnano: ctx.env === 'production' ? {} : false
  }
});
