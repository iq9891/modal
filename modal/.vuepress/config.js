const base = process.env.GH ? '/modal/' : '/'

module.exports = {
  title: '对话框组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'fe6/modal',
    editLinks: false,
    searchMaxSuggestions: 5,
    docsDir: 'modal',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/wap/zh-cn',
    ]
  }
}
