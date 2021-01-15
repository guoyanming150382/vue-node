Component({
  mixins: [],
  data: {
    sendValue:"",
    a1:187,
    a2:"安徽省电话"
  },
  props: {
    chuanzhi:"",
    qq:"",
    onhanshu1:(data)=>{
      console.log("莫甘娜",data)
    }
  },
  didMount() {
    this.setData({
      sendValue:this.props.chuanzhi,

    })
    console.log("sendValue",this.data.sendValue)
     console.log("子组件",this.is);
    console.log("子组件",this.$page);
    console.log("子组件",this.$id);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    even(){
      this.props.onhanshu1(a1)
    }
  },
});
