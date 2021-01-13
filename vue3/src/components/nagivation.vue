<template>
  <div id="navs">
    <router-view></router-view>
    <ul>
      <li @click="onsB(0)" :class="{ active: select == 0 }">
        <router-link to="/nagivation/one">跳转</router-link>
      </li>
      <li @click="onsB(1)" :class="{ active: select == 1 }">
        <router-link to="/nagivation/two"> 跳转2</router-link>
      </li>
      <li @click="onsB(2)" :class="{ active: select == 2 }">
        <router-link to="/nagivation/three"> 跳转3</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: 0,
    };
  },
  methods: {
    onsB(num) {
      this.select = num;
    },
  },
};
</script>
<style lang='scss' scoped>
#navs {
  ul {
    position: fixed;
    bottom: 0;
    width: 100%;
    li {
      display: inline-block;
      width: 33.33%;
      height: 40px;
      line-height: 40px;
    }
    .active{
      background-color:#390;
      a{
        color: #fff;
      }
    }
  }
}
</style>