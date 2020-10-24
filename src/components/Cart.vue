<template lang="html">
  <div>
    <b-button
      v-b-modal.cart>
      Корзина {{ this.isCart() ? this.count() : '' }}
    </b-button>

    <b-modal
      id="cart"
      title="Cart"
      ok-title="Заказать"
      cancel-title="Продолжить покупки">
      <p v-if="!this.isCart()">Нет данных</p>
      <div v-if="this.isCart()">
        <CartItem v-for="good in goods" :key="good.id" :item="good"/>
        <p>Сумма: {{ total }}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters('cart', {
      goods: 'cartGoods',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    isCart() {
      return this.goods.length > 0;
    },
    count() {
      return this.goods.length;
    },
  },
  mounted() {
    this.$store.dispatch('cart/getCart');
  },
};
</script>

<style lang="stylus" scoped>
</style>
