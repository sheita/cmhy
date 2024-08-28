import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CMHY",
  description: "clem memo heck yeak",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: 'Home', link: '/home' },
      { text: 'Bookmarks', link: '/bookmarks' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Home', link: '/bookmarks' }
        ]
      },
      {
        text: 'Pépites',
        items: [
          { text: '🍄 Bookmarks', link: '/bookmarks' }
        ]
      },
      {
        text: 'Exemples',
        items: [
          { text: 'Exemples de Markdown', link: '/exemples-markdown' },
          { text: 'Exemples API', link: '/exemples-api' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})