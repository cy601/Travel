<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        name=""
        id=""
        placeholder="输入城市名或拼音"
      >
    </div>
    <div
      class="search-content"
      v-show="keyword"
      ref="search"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item) in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li
          class="search-item border-bottom"
          v-show="haoNoData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {

    handleCityClick(city) {
      //   this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  components: {

  },
  computed: {
    haoNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }
      //进行关键词搜索
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          });
        }
        this.list = result;
      }, 100);

    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)

  },
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;
}

.search .search-input {
  box-sizing: border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  width: 100%;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
  padding: 0 0.1rem;
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}

.search-content .search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>