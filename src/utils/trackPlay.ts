/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-25 15:38:55
 */

import VectorSource from 'ol/source/Vector'
import { Style } from 'ol/style'
import { LineString } from 'ol/geom'
import { Coordinate } from 'ol/coordinate'
import { Feature } from 'ol'

export interface TrackPlayParams {
  source: VectorSource<LineString>
  step: number
  style: Style
  time: number
  callback: () => void
}

export default function trackPlay(
  parmas: TrackPlayParams,
  coordinates: Coordinate[]
) {
  const { source, step, style, time, callback } = parmas
  if (coordinates.length > 1) {
    const startCoord = coordinates.shift() as Coordinate
    const endCoord = coordinates[0]
    const directionX = (endCoord[0] - startCoord[0]) / step
    const directionY = (endCoord[1] - startCoord[1]) / step
    let i = 0
    let tempFeature: Feature<LineString>
    const ivlDraw = setInterval(function () {
      if (i > step) {
        clearInterval(ivlDraw)
        trackPlay(parmas, coordinates)
      }
      const newEndCoord = [
        startCoord[0] + i * directionX,
        startCoord[1] + i * directionY,
      ]
      const geometry = new LineString([startCoord, newEndCoord])
      const feature = new Feature({
        geometry,
        name: 'moving Line',
      })
      feature.setStyle(style)
      source.addFeature(feature)
      if (tempFeature) {
        try {
          source.removeFeature(tempFeature)
        } catch (err) {
          // silence
        }
      }
      tempFeature = feature
      i++
    }, time / step)
  } else {
    callback()
  }
}
