import DefaultTheme from 'vitepress/theme'

// components
// import { globals } from '../views'

// rewrite css
import './custom.scss'

export default {
    ...DefaultTheme,
  NotFound:() => '404',
  // Layout,
  enhanceApp({ app, router, siteData }) {
    console.log(app,'app');
    console.log(router,'router');
    console.log(siteData,'siteData');
    // app.use(VuetomUI)

    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
    // app.config.globalProperties.$site = siteData
  },
}
