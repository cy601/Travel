<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
        景点详情
      </router-link>
    </div>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }
      else {
        this.showAbs = true
      }
      console.log(document.documentElement.scrollTop);

    }

  },
  components: {
    CommonGallary
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
}

.header-abs .header-abs-back {
  color: #fff;
  font-size: 0.4rem;
}

.header-fixed {
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;
  position: fixed;
}

.header-fixed .header-fixed-back {
  top: 0;
  left: 0;
  position: absolute;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>