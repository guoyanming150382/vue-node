<template>
    <div id="can">
        <slot>比尔吉沃特</slot><br/>
        具名插槽
        <slot name="header">header</slot><br/>
        <slot name="content">content</slot><br/>
        <slot name="footer">footer</slot><br/>

        作用域插槽==
        <slot :data="mes"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mes:"作用域插槽**/**/*/*"
        }
    },
    methods:{
    },
    created(){
    }
}
</script>