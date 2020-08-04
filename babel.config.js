module.exports = function (api) {
  api.cache(true)

  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@*': ['*'],
        }
      }
    ]
  ]
  const presets = ['next/babel']

  return { plugins, presets }
}
