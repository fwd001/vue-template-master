export const mystorage = {
  ms: 'mystorage',
  storage: window.localStorage,

  set (key, value) {
    // 存储
    var mydata = this.storage.getItem(this.ms)
    if (!mydata) {
      this.init()
      mydata = this.storage.getItem(this.ms)
    }
    mydata = JSON.parse(mydata)
    mydata.data[key] = value
    this.storage.setItem(this.ms, JSON.stringify(mydata))
    return mydata.data
  },

  get (key) {
    // 读取
    var mydata = this.storage.getItem(this.ms)
    if (!mydata) {
      return false
    }
    mydata = JSON.parse(mydata)

    return mydata.data[key]
  },
  remove (key) {
    // 读取
    var mydata = this.storage.getItem(this.ms)
    if (!mydata) {
      return false
    }

    mydata = JSON.parse(mydata)
    delete mydata.data[key]
    this.storage.setItem(this.ms, JSON.stringify(mydata))
    return mydata.data
  },
  init () {
    this.storage.setItem(this.ms, '{"data":{}}')
  }
}
