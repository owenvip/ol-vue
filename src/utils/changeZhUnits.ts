/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-07 10:44:22
 */

const ZH_UNITS = {
  km: '千米',
  m: '米',
  mm: '毫米',
}

export default function changeZhUnits() {
  let controlText = document.querySelector('.ol-scale-line-inner')?.innerText
  if (controlText) {
    let [number, unit] = controlText.split(' ')
    if (ZH_UNITS[unit]) {
      document.querySelector(
        '.ol-scale-line-inner'
      ).innerText = `${number} ${ZH_UNITS[unit]}`
    }
  }
}
