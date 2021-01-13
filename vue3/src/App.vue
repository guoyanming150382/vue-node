<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import hello from "@/components/HelloWorld"
export default {
  name: 'App',
  components: {
    // hello
  },
  data(){
    return{
      bel:961
    }
  },
  methods:{

  },
  created(){
    
  }
}
</script>

<style>
*{
  list-style: none;
  padding: 0;
  margin:0;
  text-decoration: none;
  color: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* 抗锯齿渲染 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
