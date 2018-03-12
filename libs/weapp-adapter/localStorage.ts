const localStorage = {
  get length() {
    const { keys } = wx.getStorageInfoSync()

    return keys.length
  },

  key(n: string) {
    const { keys } = wx.getStorageInfoSync()

    return keys[n]
  },

  getItem(key: string) {
    return wx.getStorageSync(key)
  },

  setItem(key: string, value: string) {
    return wx.setStorageSync(key, value)
  },

  removeItem(key: string) {
    wx.removeStorageSync(key)
  },

  clear() {
    wx.clearStorageSync()
  }
}

export default localStorage
