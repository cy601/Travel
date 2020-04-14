<template>
  <div class="wrapper">
    <!-- v-if 在list中有数据才开始渲染swiper -->
    <swiper
      ref="mySwiper"
      v-if="showSwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src='item.imgUrl'
          alt=""
        >
      </swiper-slide>

      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        // observer: true,
        // observerParents: true
      },
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  },
  methods: {

  },
}
</script>

<style lang='stylus' scoped>
// Vue CSS scoped 动画穿透
// 将轮播图的点变成白色
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #eee;
}

.wrapper .swiper-img {
  width: 100%;
}
</style>