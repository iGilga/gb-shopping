<template lang="html">
  <div class="catalog">
    <b-row>
      <!-- <div id="notfound" v-if="!goods.lenght">Нет данных</div> -->
      <GoodItem v-for="good in goods" :key="good.key" :good="good" />
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import GoodService from '@/services/goodService';
import GoodItem from './GoodItem.vue';

export default {
  name: 'GoodList',
  components: {
    GoodItem,
  },
  data() {
    return {
    };
  },
  computed: mapGetters({
    goods: 'goods/GoodsByText',
  }),
  mounted() {
    this.$store.dispatch('goods/getAllGoods');
  },
  methods: {
    async getGoods() {
      const { data } = await GoodService.fetchGoods();
      this.goods = data;
    },
  },
};
</script>

<style lang="stylus" scoped>
.catalog
  margin .4em 0 0 0
#notfound
  width 100%
  text-align center
</style>
