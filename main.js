import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/**
 * 全局登录检查
 * @param {Object} backpage 登录后返回的页面
 * @param {Object} backtype 打开页面的类型 1: redirectTo，2: switchTab
 */
Vue.prototype.checkLogin = function(backpage, backtype) {
  // UUID
  const USID = uni.getStorageSync('SUID')
  // 随机码
  const SRAND = uni.getStorageSync('SRAND')
  const SNAME = uni.getStorageSync('SNAME')
  const SFACE = uni.getStorageSync('SFACE')
  if(USID == '' || SRAND == '' || SNAME == '') {
    // 用户没有登录，跳转到
    uni.redirectTo({
      url: `../login/login?backpage=${backpage}&backtype=${backtype}`,
    })
    // 跳转后return掉
    return false
  }
  // 有登录的情况下，返回SUID，SRAND，SNAME，SFACE
  return [SUID, SRAND, SNAME, SFACE]
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
