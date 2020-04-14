<template>
  <div>
    <div
      class="banner"
      @click='handleBannerClick'
    >
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        alt=""
      >
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"> <span class="iconfont banner-icon">&#xe64b;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs='imgs'
      v-show="showGallary"
      @close='handleGallaryClose'
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg', 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang='stylus' scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
}

.banner .banner-img {
  width: 100%;
}

.banner .banner-info {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  line-height: 0.6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner .banner-info .banner-title {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner .banner-info .banner-number {
  padding: 0 0.4rem;
  height: 0.32rem;
  margin-top: 0.14rem;
  line-height: 0.32rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}

.banner .banner-info .banner-number .banner-icon {
  font-size: 0.24rem;
  padding-right: 0.08rem;
}
</style>