import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import Layout from './Layout.vue';

// components
// import { globals } from '../views'

// rewrite css

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import './custom.scss'
console.log(DefaultTheme,'DefaultTheme');
export default {
  ...DefaultTheme,
  // NotFound:() => '404',
  Layout,
  enhanceApp({ app, router, siteData }) {
    vitepressNprogress({app, router,siteData})
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    // app.use(VuetomUI)

    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
    // app.config.globalProperties.$site = siteData
  },
}
