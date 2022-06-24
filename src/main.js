import { createApp } from 'vue'
import App from './App.vue'

import Vue3Charts  from '../lib/main'

import zoomPlugin from 'chartjs-plugin-zoom'

Vue3Charts.registerGlobalPlugins([zoomPlugin])

const Vue = createApp(App)

// Vue.use(Vue3Charts, {
//   plugins: [
//     zoomPlugin
//   ]
// })

Vue.mount('#app')
