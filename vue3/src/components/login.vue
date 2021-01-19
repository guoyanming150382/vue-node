<template>
    <div>
        <h1>登录</h1>
        <el-input
        placeholder="请输入内容"
        v-model="userName"
        clearable>
        </el-input>
        <el-input
        placeholder="请输入内容"
        v-model="password"
        type="password"
        clearable>
        </el-input>
        <button @click="setTokens">登录</button>
    </div>
</template>
<script>
import updatseBook from "@/utils/http"; 
// import titlesSuccess from "@/utils/allWays.js";
export default {
    data(){
        return{
            password: '',
            userName: '',
        }
    },
    methods:{
        setTokens(){
            let obj={passWord:this.password,name:this.userName}
             updatseBook.logons(obj).then((res) => {
                 console.log("res",res)
                 if(res.code==200){
                     sessionStorage.loginToken = res.token;
                    sessionStorage.roles=res.roles
                     this.$message({
                        message: '登录成功',
                        type: 'success'
                        });
                    this.$router.push('/nagivation/one')
                 }else{
                     this.$message.error('登录失败');
                 }
            });
        }
    },
    created(){
        
    }
}
</script>
<style scoped lang="scss">

</style>