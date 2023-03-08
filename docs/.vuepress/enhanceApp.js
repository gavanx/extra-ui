// import UILib from '../../dist/extra-ui.umd'
import UILib from '../../src/index.ts'
console.log('UILib', UILib)

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ElementUI);
  Vue.use(UILib)
}
