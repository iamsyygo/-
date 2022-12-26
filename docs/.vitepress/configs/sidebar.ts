// This file is used to configure the sidebar of the website

import { sync } from 'fast-glob'



const COMPONENTS_ITEMS={
  'element-plus':[],
  'element-ui':[],
  'ant-design':[]
}


// 获取md文件路径信息：components/ant-design/index.md
function getDirList(source:string) {
 return sync([source, '!**/node_modules/**'])
}

const componentsDir=getDirList('components/**')
componentsDir.forEach((component) => {
 component.replace(/components\/(.*?)\/(.*?)\.md/,(path,component,name) => {
  if(name==='index') return ''
  COMPONENTS_ITEMS[component].push(
    {
      text:name.replace(/\b[a-z]/g, (c) => c.toUpperCase()),
      link:`/${path}`,
      activeMatch: `^/${path}`
    }
  )
  return ''
 })
})
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
            items:COMPONENTS_ITEMS['element-plus']
          },
          {
            text: 'Element-ui',
            collapsible: true,
            items:COMPONENTS_ITEMS['element-ui']
          },
          {
            text: 'Ant-design',
            collapsible: true,
            items:COMPONENTS_ITEMS['ant-design']
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
    '/components/': SIDEBAR_COMPONENTS,
    '/api/':SIDEBAR_API,
    '/guide/':SIDEBAR_GUIDE,
}
