# Ant-design
Ant-design 里的前端代码实现方案可不是搭建静态的界面这么简单，还包含动效的解决方案也提供动效设计风格和原则，要知道大部分动效做不出来的场景都是因为设计师方案和研发代码实现存在一定的鸿沟...

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
    avatar: 'https://avatars.githubusercontent.com/u/12101536?s=200&v=4',
    name: 'Ant Design',
    title: '蚂蚁金服团队',
    links: [
      { icon: 'github', link: 'https://github.com/ant-design' },
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
