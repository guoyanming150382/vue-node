App({
  globalData: 1,
   serverurl: 'http://127.0.0.1:3333',
  wact(){
    console.log("sadasd",89)
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
   // 封装网络请求
  https(httpstype, url, data) {
    dd.showLoading();
    let endurl = encodeURI(this.serverurl + url);
    return new Promise((resolve, reject) => {
      dd.httpRequest({
        headers: {
          "Content-Type": 'application/json;charset=utf-8',
         },
        url: endurl,
        method: httpstype,
        data: data,
        dataType: 'json',
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
 
        },
        complete: (res) => {
          dd.hideLoading()
        }
      })
    })
  },
});
