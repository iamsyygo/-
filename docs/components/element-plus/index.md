# 基于 Element Plus 封装

基于 Vue 3，面向设计师和开发者的组件库，在此基础上二次封装提高功能复用性，减少相同功能多次开发的浪费.

<VPTeamMembers
    size="small"
    :members="members"
  />

## More docs
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/68583457?s=200&v=4',
    name: 'Element Plus',
    title: '饿了么团队',
    links: [
      { icon: 'github', link: 'https://github.com/element-plus/element-plus' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/86712674?v=4',
    name: 'Sea-cc',
    title: '前端攻城🦁',
    links: [
      { icon: 'github', link: 'https://github.com/Sea-cc' },
    ]
  },
]
</script>
