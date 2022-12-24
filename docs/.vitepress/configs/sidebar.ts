// This file is used to configure the sidebar of the website

// 组件功能相关
const SIDEBAR_API=[
    {
        text: '功能',
        collapsible: true,
        items: [
          {
            text: '已实现',
            link: '/api/'
          },
        ]
      }
]

// 组件库组件使用相关
const SIDEBAR_COMPONENTS=[
    {
        text: '组件',
        items: [
          {
            text: 'Element-plus',
            collapsible: true,
            collapsed: true,
            items:[
              {
                text:'Button',
                link:'/components/element-plus/button'
              },
              {
                text:'Button',
                link:'/components/element-plus/button'
              },
            ]
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
      }
]

// 组件库指引相关
const SIDEBAR_GUIDE = [
    {
        text: '指南',
        items: [
          {
            text: '设计',
            link: '/guide/设计'
          },
          {
            text: '导航',
            link: '/guide/导航'
          },
          {
            text: '安装',
            link: '/guide/安装'
          },
          {
            text: '快速开始',
            link: '/guide/快速开始'
          },
        ]
      }
]

export default {
    '/api/':SIDEBAR_API,
    '/components/': SIDEBAR_COMPONENTS,
    '/guide/':SIDEBAR_GUIDE,
}
