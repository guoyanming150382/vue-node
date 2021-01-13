<template>
    <div id="can">
        <button @click="sonDfu">子传父有</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:"子传父有shuju"
        }
    },
    // 父传子
    props:{
        text1:{
            type:String,
        }
    },
    methods:{
        // 子传父
        sonDfu(){
            this.$emit("zifu",this.message)
        }
    },
    created(){
        console.log("所得参数",this.text1)
    }
}
</script>