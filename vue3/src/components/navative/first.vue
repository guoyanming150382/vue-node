<template>
  <div id="a1">
    oneasda+++{{ $store.state.name }}
    <!-- 混合指令  -->
    混合指令 minix
    <button @click="minClick">法正</button>
    <div v-for="(item, index) in minArrary" :key="index">
      {{ item.name }} 的年龄 {{ item.old }}
    </div>
    <h4>计算属性{{ resecia }}</h4>
    <h4 @click="quser">侦听器{{ watchTv }}----{{ wacss.obtL }}</h4>
    <button @click="btns">返回</button><br />
    <button @click="bttss">跳转到路由界面</button>
  </div>
</template>

<script>
import updatseBook from "@/utils/http"; //引出后必须用，否则报错
import minixx from "@/utils/minxss";
export default {
  name: "one",
  mixins: [minixx.pageMinix],
  data() {
    return {
      names: "刘巴",
      watchTv: "电视机",
      wacss: {
        obtL: "阿萨达多",
      },
       value: true
    };
  },
  methods: {
    getDates() {
      // axios 普通用法
      // this.$axios.get('/index').then((res)=>{
      //     console.log(res)
      // })

      // 封装后的axios
      updatseBook.updateBook().then((res) => {
        console.log("封装", res);
        // sessionStorage.loginToken = res.token;
      });

      updatseBook.sends({ name: "奥术大师多" }).then((res) => {
        console.log("封装", res);
      });

      updatseBook.getsendDate({ name: "get传输的奥术大师多" }).then((res) => {
        console.log("get传输的奥术大师多", res);
      });

      updatseBook.postTake().then((res) => {
        console.log("post拿取数据", res);
      });
    },
    minClick() {
      this.minName();
    },
    quser() {
      //   this.watchTv = "细节、以及";
      this.wacss.obtL = "22121";
      this.wacss.op = "吕子明";
    },
    btns() {
      this.$router.go(-1);
    },
    bttss() {
      this.$router.push({ 
          path: "/jump" ,
          query:{
              name:"钟婷"
          }
         });
    },
  },
  computed: {
    resecia() {
      return this.names + "字 子初";
    },
    wactcComptent() {
      return JSON.parse(JSON.stringify(this.wacss));
    },
  },
  watch: {
    // watchTv(val,oldVal) {
    //   console.log("洗衣机变化了",val,oldVal);
    // },
    wactcComptent: {
      handler(val, oldVal) {
        console.log("sh深度监听", val, "神2", oldVal);
      },
      deep: true,
    },
  },
  created() {
    this.getDates();
    this.quser();
    console.log("路由", this.$route);
    console.log("路由11", this.$router);
    console.log("router-line",this.$route.params)
  },
};
</script>

<style>
</style>