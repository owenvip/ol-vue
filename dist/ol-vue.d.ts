/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:29:58
 */
import { DefineComponent, Plugin } from 'vue'

declare const OlVue: DefineComponent<{}, {}, any> & {
  install: Exclude<Plugin['install'], undefined>
}
export default OlVue
