import { debounce } from './helper'

// export default function Rem() {
//   ;(function (win) {
//     const setFontSize = () => {
//       const isMobileDev = isMobile()
//       let fontsize = ''
//       const doc = win.document
//       const docEl = doc.documentElement
//       let width = docEl.clientWidth || doc.body.clientWidth
//       if (isMobileDev) {
//         fontsize = width / 375 + 'px' //375是移动端设计稿的宽度
//       } else {
//         fontsize = width / 1920 + 'px' //1920是pc端设计稿的宽度
//       }
//       document.getElementsByTagName('html')[0].style['font-size'] = fontsize
//     }

//     let setDomFontSizeDebounce = debounce(setFontSize, 400) //做个防抖
//     window.addEventListener('resize', setDomFontSizeDebounce)

//     setFontSize()
//   })(global.window)
// }

/**
 * 配置 rem 缩放比例
 */
export default function Rem() {
  ;(function (doc, win) {
    const resizeEvt =
      'orientationcyunhange' in win ? 'orientationchange' : 'resize'

    const reCalc = function () {
      // 获取当前设备的窗口宽度
      var clientWidth = doc.documentElement.clientWidth
      if (!clientWidth) return

      // 动态设置全局字体大小
      doc.documentElement.style.fontSize = 100 * 2 * (clientWidth / 1920) + 'px'
    }
    reCalc()
    if (!doc.addEventListener) return
    // 绑定事件
    const debounceReCalc = debounce(reCalc, 400)
    win.addEventListener(resizeEvt, debounceReCalc, false)
    doc.addEventListener('DOMContentLoaded', debounceReCalc, false)
  })(global.window.document, global.window)
}
