<template lang="html">
  <div class="catalog">
    <b-row>
      <GoodItem v-for="good in goods" :key="good.key" :good="good" />
    </b-row>
  </div>
</template>

<script>
import GoodItem from './GoodItem.vue';

export default {
  name: 'GoodList',
  components: {
    GoodItem,
  },
  data() {
    return {
      goods: [
        { id: 1, title: 'Shirt', price: 150 },
        { id: 2, title: 'Socks', price: 50 },
        { id: 3, title: 'Jacket', price: 350 },
        { id: 4, title: 'Shoes', price: 250 },
        { id: 5, title: 'Shoes', price: 300 },
        { id: 6, title: 'Shoes', price: 75 },
        { id: 7, title: 'Shoes', price: 275 },
        { id: 8, title: 'Shoes', price: 400 },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.catalog
  margin .4em 0 0 0
</style>
