<template>
  <div id="a1">
      oneasda+++{{$store.state.name}}
  </div>
</template>

<script>
import updatseBook from '@/utils/http';//引出后必须用，否则报错

export default {
    name:'one',
    data(){
        return{
            
        }
    },
    methods:{
        getDates(){
            // axios 普通用法
            // this.$axios.get('/index').then((res)=>{   
            //     console.log(res)
            // })

            // 封装后的axios
            updatseBook.updateBook().then((res)=>{
                console.log("封装",res)
                sessionStorage.loginToken=res.token
            })

            updatseBook.sends({name:"奥术大师多"}).then((res)=>{
                console.log("封装",res)
            })

            updatseBook.getsendDate({name:"get传输的奥术大师多"}).then((res)=>{
                console.log("get传输的奥术大师多",res)
            })

            updatseBook.postTake().then((res)=>{
                console.log("post拿取数据",res)
            })
        },
        
    },
    created(){
        this.getDates()
    }
}
</script>

<style>

</style>