import UILib from '../../dist/extra-ui.umd'
console.log('UILib', UILib)


export default ({ Vue, options, router, siteData }) => {
  Vue.use(UILib)
}
