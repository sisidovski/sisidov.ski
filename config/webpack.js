import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (config, { defaultLoaders, stage }) => {
  let loaders = []

  if (stage === 'dev') {
    loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
  } else {
    loaders = [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          minimize: stage === 'prod',
          sourceMap: false,
        },
      },
      {
        loader: 'sass-loader',
        options: { includePaths: ['src/'] },
      },
    ]

    // Don't extract css to file during node build process
    if (stage !== 'node') {
      loaders = ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: false,
            hmr: false,
          },
        },
        use: loaders,
      })
    }
  }

  config.module.rules = [
    {
      oneOf: [
        {
          test: /\.s(a|c)ss$/,
          use: loaders,
        },
        defaultLoaders.cssLoader,
        defaultLoaders.jsLoader,
        defaultLoaders.fileLoader,
      ],
    },
  ]
  return config
}