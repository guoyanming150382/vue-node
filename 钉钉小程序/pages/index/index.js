var app = getApp()
Page({
  data:{
    sword:"强条一条线",
    dataValues:"521521521",
    gu:12,
    array:[{qw:23},{der:"sada"}],
    bi2:['1','2','3','4'],
    flage:1,
    // 模板
    staffA: {firstName: 'san', lastName: 'zhang'},
    staffB: {firstName: 'si', lastName: 'li'},
    staffC: {firstName: 'wu', lastName: 'wang'},
    conte:1,
    flag1:true,
    menus:[{son:12,son1:"阿斯顿撒多"},{son:"撒大大",son1:"465466"}],
    lop:{a1:"1",a2:"阿萨达",a3:"asdad"}
  },
  onLoad(query) {
    console.log("全局", app.globalData) // 获取 globalData
    app.wact()
    console.log("121",this.data.gu)
    console.log("当前页面层数",getCurrentPages())
    let a1={qw:"12",yu:"萨达"}
    let a2={jasd:"安师大会",jhasdh:"氨基酸的"}
    let all={...a1}//克隆数据
    let all1={...a1,...a2}//合并数据
    console.log("加点水",all,all1,new Date().getDay())
    console.log(Math.max(30,55))
    var [a, ,b] = [1,2,3];
    console.log("asdada",a,b)
    this.httpget()
  },
  httpget(){
     app.https('GET', '/index').then(res => {
        console.log(res)
      })
  },
  clic(){
    this.setData({
      gu:"阔步藏丹增",
      "array[0].qw":"阿拉布坦",
    })
    this.$spliceData({ 'bi2': [1, 0, 5, 6,"asdsada","****"] })
  },
  tiao(){
    dd.navigateTo({
      url:'/pages/son/son?id=96&war=87'
    })
  },
  conteClick(){
    this.setData({
      conte:this.data.conte+1
    })
    console.log("this.data.conte+1",this.data.conte)
  },
  falsss(){
    this.setData({
      flage:2
    })
  },
  falsss1(){
    this.setData({
      flage:3
    })
  },
  showHide(){
    this.setData({
      flag1:!this.data.flag1
    })
  },
  onchanggett(){
    
  },
  onReady() {
    // 页面加载完成
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
