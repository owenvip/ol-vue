/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:31:47
 */
import { App } from 'vue'

import {
  Map,
  Layers,
  Sources,
  MapControls,
  Geometries,
  Styles,
  Interactions,
  Animations,
} from './components'

import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'

import 'ol-contextmenu/dist/ol-contextmenu.css'

import feature from 'ol/Feature'
import * as geom from 'ol/geom'
import * as format from 'ol/format'
import * as loadingstrategy from 'ol/loadingstrategy'
import * as selectconditions from 'ol/events/condition'
import * as extent from 'ol/extent'
import * as animations from 'ol/easing'

export default function install(app: App) {
  app.use(Map)
  app.use(Layers)
  app.use(Sources)
  app.use(MapControls)
  app.use(Geometries)
  app.use(Styles)
  app.use(Interactions)
  app.use(Animations)

  app.provide('ol-feature', feature)
  app.provide('ol-geom', geom)
  app.provide('ol-animations', animations)
  app.provide('ol-format', format)
  app.provide('ol-loadingstrategy', loadingstrategy)
  app.provide('ol-selectconditions', selectconditions)
  app.provide('ol-extent', extent)
}

export { install, Map, Layers, Sources, MapControls, Geometries, Styles }
