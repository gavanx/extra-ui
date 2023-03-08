module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Extra UI Library',
      description: 'Extra UI Library for VUE'
    }
  },
  themeConfig: {
    repoLabel: 'GitLab',
    repo: 'https://git.n.xiaomi.com/cloud-fe/extra-ui',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: '编辑此页',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: '上次更新',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: '快速开始', link: '/guide' },
          { text: '组件', link: '/components/' },
        ],
        sidebar: {
          '/components/': [
            {
              title: '组件',
              collapsable: false,
              children: ['DemoComponent', 'SelectLimit']
            }
          ]
        }
      }
    }
  }
}
