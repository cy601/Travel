<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) in cities"
      :key="key"
    >{{key}}</li>

  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
// 导入公用
@import '~styles/varibles.styl';

.list {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
}

.list .item {
  text-align: center;
  line-height: 0.4rem;
  color: $bgColor;
}
</style>
