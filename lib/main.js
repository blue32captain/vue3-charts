import Vue3Charts from './Vue3Charts.vue'
import { Chart } from 'chart.js'

Vue3Charts.registerGlobalPlugins = (plugins) => {
  Chart.register(...plugins)
}

Vue3Charts.install = (app, options = {}) => {
  app.component(Vue3Charts.name, Vue3Charts)

  if (options?.plugins?.length) {
    Vue3Charts.registerGlobalPlugins(options.plugins)
  }
}

export default Vue3Charts