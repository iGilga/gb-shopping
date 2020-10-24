<template lang="html">
  <b-navbar oggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Shopping</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <div class="mr-sm-2">
        <Search/>
      </div>
      <div>
        <Cart/>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Search from './Search.vue';
import Cart from './Cart.vue';

export default {
  name: 'Menu',
  components: {
    Search,
    Cart,
  },
};
</script>

<style lang="stylus" scoped>
</style>
