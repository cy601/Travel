<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item) in letters"
      :key="item"
      :ref='item'
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >{{item}}</li>

  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },

  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },

  updated() {
    //缓存startY 不用每次都加载 节省性能
    this.startY = this.$refs['A'][0].offsetTop
  },

  methods: {
    handleLetterClick(e) {

      // 点击的时候向父组件传值
      this.$emit('change', e.target.innerText)
      //   console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true

    },
    // 手指滑动16ms后才执行handleTouchMove  防抖 
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          //   const startY = this.$refs['A'][0].offSetTop
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(startY);
          // console.log(touchY);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(index);
          }
        }, 8);




      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }

  },
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
