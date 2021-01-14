<template>
  <div id="can">
      局部自定义指令
    <input type="text" v-focus/>
    <div v-selfValue:[mseg]="opkj">全局自定义指令{{}}</div>
  </div>
</template>

<script>
// 全局指令
import Vue from 'vue'

Vue.directive('selfValue',{
  bind:function(el,binding,vnode){
      console.log('binding',binding)
      let a = '123';
      binding.arg=a+" 世界"
      console.log('el',el)
      console.log('vnode',vnode)
      console.log(vnode.context.arr)
      el.style.color=binding.value
      el.setAttribute("id","b11utton");
  }
})

export default {
  data() {
    return {
        mseg:"color",
        opkj:"red",
        qqqq:""
    };
  },
  methods: {},
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      },
    },

  },
  created() {
    //   console.log("qqqqqqqqqqqqqqq",this.qqqq)

  },
}
</script>
<style scoped lang="scss">

</style>