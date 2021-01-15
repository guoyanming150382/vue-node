var app = getApp()
Page({
  data: {
    allArray:[
      
    ]
  },
  onLoad(query) {
    console.log("当前页面层1数", getCurrentPages())
    this.news()
    dd.setStorage({key:"firts",data:{addreee:"北京",spell:"asda555"},success: function() {
    dd.alert({content: '写入成功'});
    console.log("传入的信息",query)
  }})
  },
  onReady() {
    // 页面加载完成
  },
  tiao() {
    dd.switchTab({
      url: "/pages/index/index"
    })
  },
  gets(){
    console.log("1212",dd.getStorage({key:"firts"}))
  },
  remove(){
    dd.removeStorage({key:"firts"})
  },
    news(){
    // dd.getLocation({
    //   success(res) {
    //     this.setData({
    //       hasLocation: true,
    //       location: formatLocation(res.longitude, res.latitude)
    //     })
    //     console.log("经纬度",res)
    //   },
    //   fail() {
    //     dd.alert({ title: '定位失败' });
    //   },
    // })
  },
  weizhi1(){
    dd.openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号',
});
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
  },
});
