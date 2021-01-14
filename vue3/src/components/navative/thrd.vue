<template>
  <div id="a3">
    ①threesad 路由传参书
    <h1>②插槽</h1>
    <chaSolt>
      <template v-slot:header>顶部文章</template>
      <template v-slot:content>zhong部文章</template>
      <template v-slot:footer>尾部部文章</template>
      <h2 slot-scope="op">{{op.data}}</h2>
    </chaSolt>
    weizhi位置
    
  </div>
</template>

<script>
import chaSolt from "@/components/soltss"
export default {
  name: "three",
  data() {
    return {
      routerdATES: "路由传参书",
    };
  },
  components:{
    chaSolt
  },
  methods: {
    routeSend() {
      
      //路由 query传参数
      // this.$router.push({
      //   path:'/nagivation/two',
      //   query:{
      //     use:"query传参数"
      //   }
      // })
    },
      // 路由 params传参

    // routerparm(){
    //   this.$router.push({ 
    //     name: "two",
    //      params: { userId: 123 } 
    //   });
    // }
  },
  created() {
    // 路由产参数
    // this.routeSend()
    // this.routerparm()
  },
};
</script>

<style>
</style>