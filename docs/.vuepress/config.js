module.exports = {
  title: 'One Piece',
  // theme: 'reco', // 主题
  base: '/',
  dest: 'public',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  // plugins: ['permalink-pinyin'],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '目录',
        items: [
          { text: '前端', link: '/web/vue' },
          { text: '后端', link: '/server/node' },
        ],
      },
    ],
    sidebar: {
      '/web/': ['vue'],

      '/server/': ['node'],
    },
    sidebarDepth: 3,
  },
}
