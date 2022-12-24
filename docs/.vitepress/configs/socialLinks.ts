export default<SocialLink[]> [
    { icon: 'github', link: 'https://github.com/Sea-cc' },
    { icon: 'twitter', link: '...' },
    // You can also add custom icons by passing SVG as string:
    // {
    //   icon: {
    //     svg: ''
    //   },
    //   link: '...'
    // }
  ]

  interface SocialLink {
    icon: SocialLinkIcon
    link: string
  }
  
  type SocialLinkIcon =
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'slack'
    | 'twitter'
    | 'youtube'
    | { svg: string }
