const { path } = require('@vuepress/shared-utils')
const schemaScript = require('./SEO')

module.exports = {
  // title: "Austin O'Brion — B2B SaaS CRO, Founder, Growth Advisor",
  description: "Digital product leader & growth expert. Founder crafting digital strategies and experiences for exponential growth. Mentor to startups.",
  themeConfig: {
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [`script`, { type: 'application/ld+json' }, schemaScript],
    // ['title', null, 'Austin O\'Brion — B2B SaaS CRO, Founder, Growth Advisor'],
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
