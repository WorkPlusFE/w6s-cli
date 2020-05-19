const sentryConfig = require('./sentry.config');

module.exports = {
  pluginOptions: {
    mock: {
      entry: 'mock/index.js',
      mockDir: 'mock',
      prefix: '/mock',

      disable: false,
      log: true,
    },
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
    vconsole: {
      enable: process.env.NODE_ENV === 'development',
    },
    sentry: {
      enable: true,
      ...sentryConfig,
    },
    styleResourcesLoader: {
      preProcessor: 'scss',
      patterns: ['./styles/*/*.scss'],
    },
  },
  devServer: {
    port: 8881,
  },
};
