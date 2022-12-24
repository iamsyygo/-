// https://vitepress.vuejs.org/config/#nav
export default  [
    { text: '指南', link: '/guide/设计', activeMatch: '^/guide/设计' },
    { text: '组件', 
      items: [
              {
                text: 'Element-plus',
                link:'/components/element-plus/index'
              },
              {
                text: 'Element-ui',
                link:'/components/element-ui/index'
              },
              {
                text: 'Ant-design',
                link:'/components/ant-design/index'
              },
        ]
    },
    { text: 'API 参考', link: '/api/' },
    {
      text: '更新日志',
      link:
        'https://github.com/xinlei3166/vitepress-demo'
    }
  ]

 