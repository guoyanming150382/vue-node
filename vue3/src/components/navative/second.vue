<template>
  <div id="a2">
      two
      <!-- 父子传参数 -->
      faSon
      <faSon :text1="mier" @zifu="parenbts"></faSon>
  </div>
</template>

<script>
import faSon from "@/components/fathersSon"
export default {
 name:'two',
 data(){
        return{
            mier:"你好"
        }
    },
    components:{
      faSon
    },
    methods:{
      parenbts(payload){
        console.log("子传父",payload)
      }
    },
    created(){
      console.log("luyou   params接收参数",this.$route.params.userId)
      console.log("luyou   query接收参数",this.$route.query.use)
    }
}
</script>

<style>

</style>