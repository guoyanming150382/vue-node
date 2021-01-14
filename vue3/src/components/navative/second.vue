<template>
  <div id="a2">
      two
      <!-- 父子传参数 -->
      faSon
      ①<faSon :text1="mier" @zifu="parenbts"></faSon>
      <!-- 自定义指令 -->
      ②<h1>自定义指令</h1>
      <selftMakeCom></selftMakeCom>
  </div>
</template>

<script>
import selftMakeCom from "@/components/selftMakeCom"
import faSon from "@/components/fathersSon"
import updatseBook from '@/utils/http';//引出后必须用，否则报错
export default {
 name:'two',
 data(){
        return{
            mier:"你好 父传子"
        }
    },
    components:{
      faSon,
      selftMakeCom
    },
    methods:{
      parenbts(payload){
        console.log("子传父",payload)
      },
        getDates(){
            updatseBook.sends({name:"奥术大师多"}).then((res)=>{
                console.log("post拿取数据",res)
            })
        },
    },
    created(){
      // console.log("luyou   params接收参数",this.$route.params.userId)
      // console.log("luyou   query接收参数",this.$route.query.use)
      this.getDates()
    }
}
</script>

<style>

</style>