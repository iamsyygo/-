# Element UI

Element UI 一个为 Vue 而生的UI框架，它不依赖于 Vue。但是却是当前和 Vue 配合做项目开发的一个比较好的 UI 框架.

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
