<template lang="html">
  <div class="catalog">
    <b-row>
      <GoodItem v-for="good in goods" :key="good.key" :good="good" />
    </b-row>
  </div>
</template>

<script>
import GoodService from '@/services/goodService';
import GoodItem from './GoodItem.vue';

export default {
  name: 'GoodList',
  components: {
    GoodItem,
  },
  data() {
    return {
      goods: [],
    };
  },
  mounted() {
    this.getGoods();
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
</style>
