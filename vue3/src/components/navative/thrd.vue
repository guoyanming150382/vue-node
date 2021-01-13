<template>
  <div id="a3">
    threesad 路由传参书
  </div>
</template>

<script>
export default {
  name: "three",
  data() {
    return {
      routerdATES: "路由传参书",
    };
  },
  methods: {
    routeSend() {
      
      //路由 query传参数
      this.$router.push({
        path:'/nagivation/two',
        query:{
          use:"query传参数"
        }
      })
    },
      // 路由 params传参

    routerparm(){
      this.$router.push({ 
        name: "two",
         params: { userId: 123 } 
      });
    }
  },
  created() {
    // 路由产参数
    this.routeSend()
    this.routerparm()
  },
};
</script>

<style>
</style>