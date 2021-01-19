<template>
  <div id="a2">
    two
    <!-- 父子传参数 -->
    faSon ①<faSon :text1="mier" @zifu="parenbts"></faSon>
    <!-- 自定义指令 -->
    ②
    <h1>自定义指令</h1>
    <selftMakeCom></selftMakeCom>
  </div>
</template>

<script>
import selftMakeCom from "@/components/selftMakeCom";
import faSon from "@/components/fathersSon";
import updatseBook from "@/utils/http"; //引出后必须用，否则报错
export default {
  name: "two",
  data() {
    return {
      mier: "你好 父传子",
    };
  },
  components: {
    faSon,
    selftMakeCom,
  },
  methods: {
    parenbts(payload) {
      console.log("子传父", payload);
    },
    getDates() {
      updatseBook.sends({ name: "奥术大师多" }).then((res) => {
        console.log("post拿取数据", res);
      });
    },
  },
  created() {
    // console.log("luyou   params接收参数",this.$route.params.userId)
    // console.log("luyou   query接收参数",this.$route.query.use)
    this.getDates();
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("-----------组件内守卫-------------")
    next()
  },
  beforeRouteLeave(to, from, next) {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
           next();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });  
           next();       
        });
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("路由改变")
    next()
  },
};
</script>

<style>
</style>