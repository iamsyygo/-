# Docs

This is a .md using a custom component

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
    avatar: 'https://avatars.githubusercontent.com/u/86712674?v=4',
    name: 'Sea-cc',
    title: '前端攻城🦁',
    links: [
      { icon: 'github', link: 'https://github.com/Sea-cc' },
    ]
  },
]
</script>
