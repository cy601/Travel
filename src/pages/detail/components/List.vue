<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div
        v-if="item.children"
        class="item-children"
      >
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data() {
    return {

    }

  }
}

</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.item-title-icon {
  display: inline-block;
  position: relative;
  width: 0.36rem;
  height: 0.36rem;
  left: 0.06rem;
  top: 0.06rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.9rem no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.item-children {
  padding: 0.2rem;
}
</style>