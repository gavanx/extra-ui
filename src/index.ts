import DemoComponent from "./demo/DemoComponent.vue";
import SelectLimit from "./ui/SelectLimit.vue";

const components = [
  DemoComponent,
  SelectLimit,
]

const ComponentLibary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibary)
}