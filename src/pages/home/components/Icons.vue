<template>
  <div class="icons">
    <swiper ref="mySwiper">
      <swiper-slide
        v-for="(page,index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="(item) in page"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
              alt=""
            ></div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '潮州必游'
        },
        {
          id: '0003',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: '紫莲度假村'
        },
        {
          id: '0004',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: '自然风光'
        },
        {
          id: '0005',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png",
          desc: '广州融创'
        },
        {
          id: '0006',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f85ce21492e4f7896498dc70dc43f8b3.png",
          desc: '绿岛山庄'
        },
        {
          id: '0007',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: '凤翔峡'
        },
        {
          id: '0008',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: '青岛怪臼'
        },
        {
          id: '0009',
          imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: '自然风光'
        },
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages;
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

// CSS穿透
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

// .icons {
// width: 100%;
// height: 0;
// padding-bottom: 50%;
// // 宽高比为2：1
// overflow: hidden;
// }
.icons {
  margin-top: 0.1rem;
}

.icon {
  float: left;
  width: 25%;
  padding-bottom: 25%;
  position: relative;
}

.icon .icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon .icon-img .icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon .icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $darkTextColor;
  text-align: center;
  ellipsis();
}
</style>