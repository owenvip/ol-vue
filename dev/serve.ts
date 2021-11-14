/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:40:06
 */
import { createApp } from 'vue'
import Dev from './serve.vue'
import openlayers from '../dist/ol-vue'

const app = createApp(Dev)

app.use(openlayers).mount('#app')
