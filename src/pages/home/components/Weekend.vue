<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item
        border-bottom"
        v-for="(item) in list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src='item.imgUrl'
            alt=""
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
            {{item.desc}}
          </p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: "http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
      //     title: '浮在海上的绿洲',
      //     desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: "http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
      //     title: '浮在海上的绿洲',
      //     desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: "http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
      //     title: '浮在海上的绿洲',
      //     desc: '这里特别受欢迎哟!'
      //   },
      // ]
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.09%;
}

.item-info {
  padding: 0.1rem;
}

.item-info .item-img {
  width: 100%;
}

.item-info .item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-info .item-desc {
  line-height: 0.4rem;
  color: #ccc;
  ellipsis();
}
</style>