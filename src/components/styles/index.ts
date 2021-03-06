/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
 */
import Style from './Style.vue'
import Circle from './Circle.vue'
import Stroke from './Stroke.vue'
import Fill from './Fill.vue'
import Icon from './Icon.vue'
import Text from './Text.vue'
import FlowLine from './FlowLine.vue'
import PathLine from './PathLine.vue'

function install(app) {
  if (install.installed) {
    return
  }

  install.installed = true

  app.component(Style.name, Style)
  app.component(Circle.name, Circle)
  app.component(Stroke.name, Stroke)
  app.component(Fill.name, Fill)
  app.component(Icon.name, Icon)
  app.component(Text.name, Text)
  app.component(FlowLine.name, FlowLine)
  app.component(PathLine.name, PathLine)
}

export default install

export { install, Style, Stroke, Fill, Icon, Text, FlowLine }
