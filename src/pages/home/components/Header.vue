<template>
  <div class="header">
    <div class="header-lefg">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont  arrow-icon">&#xe6d3;</span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  // props: {
  //   city: String
  // },
  computed:{
    ...mapState(['city']),
  }
}
</script>

<style lang='stylus' scoped>
// 引入样式文件  两种写法
// @import '../../../assets/styles/varibles.styl';
// @import '~@/assets/styles/varibles.styl';

// 在webpack.base.config 设置好别名之后 alias
@import '~styles/varibles.styl';

.header {
  height: $headerHeight;
  line-height: $headerHeight;
  display: flex;
  background-color: $bgColor;
  color: #fff;
}

.header-left {
  width: 0.64rem;
  float: left;
}

.back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  padding-left: 0.2rem;
  background: #ffffff;
  margin-left: 0.2rem;
  border-radius: 0.1rem;
  color: #ccc;
}

.header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
}

.arrow-icon {
  margin-left: -0.04rem;
  font-size: 0.24rem;
}
</style>