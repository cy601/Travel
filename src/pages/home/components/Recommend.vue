<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        :to="'/detail/'+item.id"
        tag="li"
        class="item
        border-bottom"
        v-for="(item) in list"
        :key="item.id"
      >

        <img
          class="item-img"
          :src='item.imgUrl'
          alt=""
        >

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
            {{item.desc}}
          </p>
          <button class="item-button">查看详情</button>
        </div>

      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {

    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}

.item .item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item .item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item .item-info .item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item .item-info .item-desc {
  line-height: 0.4rem;
  color: #ccc;
  ellipsis();
}

.item .item-info .item-button {
  background: #ff9300;
  padding: 0 0.1rem;
  border-radius: 0.06rem;
  margin-top: 0.16rem;
  color: #fff;
  line-height: 0.44rem;
}
</style>