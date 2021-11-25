/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
 */
import { provide, computed } from 'vue'
import usePropsAsObjectProperties from '@/hooks/usePropsAsObjectProperties'
import Animation from '@/components/animations/FeatureAnimation'

export default function useAnimation(AnimationType, props) {
  const { map, vectorLayer } = Animation.setup()

  const { properties } = usePropsAsObjectProperties(props)

  const animation = computed(() => {
    let anim = new AnimationType({
      ...properties,
    })

    return anim
  })

  provide('animation', animation)

  return {
    map,
    vectorLayer,
    animation,
    properties,
  }
}
