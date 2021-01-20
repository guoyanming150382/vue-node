<template>
  <div id="a1">
    oneasda+++{{ $store.state.name }}
    <!-- 混合指令  -->
    混合指令 minix
    <button @click="minClick">法正</button>
    <div v-for="(item, index) in minArrary" :key="index">
      {{ item.name }} 的年龄 {{ item.old }}
    </div>
    <h4>计算属性{{ resecia }}</h4>
    <h4 @click="quser">侦听器{{ watchTv }}----{{ wacss.obtL }}</h4>
    <button @click="btns">返回</button><br />
    <button @click="bttss">跳转到路由界面</button>
    <hr />
    <h4>动态列表</h4>
    <el-col :span="9">
      <h5>菜单列表</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3"> <!--disabled-->
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import updatseBook from "@/utils/http"; //引出后必须用，否则报错
import minixx from "@/utils/minxss";
export default {
  name: "one",
  mixins: [minixx.pageMinix],
  data() {
    return {
      names: "刘巴",
      watchTv: "电视机",
      wacss: {
        obtL: "阿萨达多",
      },
      value: true,
    };
  },
  methods: {
    getDates() {
      // axios 普通用法
      // this.$axios.get('/index').then((res)=>{
      //     console.log(res)
      // })

      // 封装后的axios
      updatseBook.updateBook().then((res) => {
        console.log("封装", res);
        // sessionStorage.loginToken = res.token;
      });

      updatseBook.sends({ name: "奥术大师多" }).then((res) => {
        console.log("封装", res);
      });

      updatseBook.getsendDate({ name: "get传输的奥术大师多" }).then((res) => {
        console.log("get传输的奥术大师多", res);
      });

      updatseBook.postTake().then((res) => {
        console.log("post拿取数据", res);
      });
    },
    minClick() {
      this.minName();
    },
    quser() {
      //   this.watchTv = "细节、以及";
      this.wacss.obtL = "22121";
      this.wacss.op = "吕子明";
    },
    btns() {
      this.$router.go(-1);
    },
    bttss() {
      this.$router.push({
        path: "/jump",
        query: {
          name: "钟婷",
        },
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    resecia() {
      return this.names + "字 子初";
    },
    wactcComptent() {
      return JSON.parse(JSON.stringify(this.wacss));
    },
  },
  watch: {
    // watchTv(val,oldVal) {
    //   console.log("洗衣机变化了",val,oldVal);
    // },
    wactcComptent: {
      handler(val, oldVal) {
        console.log("sh深度监听", val, "神2", oldVal);
      },
      deep: true,
    },
  },
  created() {
    this.getDates();
    this.quser();
    console.log("路由", this.$route);
    console.log("路由11", this.$router);
    console.log("router-line", this.$route.params);
  },
};
</script>

<style>
</style>