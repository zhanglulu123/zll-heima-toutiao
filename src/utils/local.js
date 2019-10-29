const KEY = 'hm-toutiao-pc-84-user-key'
const local = {
  // 存储
  setUser (user) {
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  //   获取
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  //   清除
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
