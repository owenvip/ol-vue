/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:29:58
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module '*.png'
