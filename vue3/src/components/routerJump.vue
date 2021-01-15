<template>
    <div id="lu">
        <h1>路由相关：</h1>
        <p @click="jump">返回</p>
        <p @click="jump1">返回1</p>
        <router-link :to="{name:'one',params:{objects:'丹妮的优势'}}">routerLink传输</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            r1:"",
            r2:"",
            router11:""
        }
    },
    methods:{
        jump(){
            this.$router.go(-1)
        },
        jump1(){
            window.history.go(-1)
        }
    },
    created(){
        console.log("router",this.$router)
        console.log("route",this.$route)
        // 跳转到其他界面  this.$router.push('/jump')
        this.router11=this.$route.query.name
    },
    mounted(){
        console.log('this.router11',this.router11)
    }
}
</script>
<style scoped lang="scss">

</style>