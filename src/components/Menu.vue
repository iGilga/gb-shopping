<template lang="html">
  <b-navbar oggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Shopping</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <div class="mr-sm-2">
        <Search/>
      </div>
      <div>
        <b-button>Cart</b-button>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Search from './Search.vue';

export default {
  name: 'Menu',
  components: {
    Search,
  },
};
</script>

<style lang="stylus" scoped>
</style>
