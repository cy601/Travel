<template>
  <div class="wrapper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="item of swiperList"
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
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop:true

      },
      swiperList: [
        {
          id: '0001',
          imgUrl: '//source.qunarzz.com/site/images/wns/20200331_qunar_dujia_750x192_gonggao.jpg'
        },
        {
          id: '0002',
          imgUrl: '//source.qunarzz.com/site/images/wns/20200408_qunar_dujia_banner_750x192_5.jpg'
        },
      ]
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