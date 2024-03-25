const { path } = require('@vuepress/shared-utils')
const schemaScript = require('./SEO')

module.exports = {
  title: "Austin O'Brion — B2B SaaS CRO, Founder, Growth Advisor",
  description: "Austin O'Brion: Your Partner in B2B SaaS Success. As a Fractional CMO, CRO Expert & Growth Advisor, I craft tailored strategies for exponential growth. Let's ignite your journey now!",
  themeConfig: {
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap' }],
    [`script`, { type: 'application/ld+json' }, schemaScript],
    ['title', null, 'Austin O\'Brion — B2B SaaS CRO, Founder, Growth Advisor'],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  alias: {
    '@': path.resolve(__dirname, '../.vuepress')
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  },
  plugins: {
    'vuepress-plugin-smooth-scroll': true,
  },
  chainWebpack: (config, isServer) => {
    // Add a new rule for handling WebP files
    config.module
      .rule('webp')
      .test(/\.(webp)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash:8].[ext]' // Adjust filename pattern if needed
      })
      .end();
  }
}
