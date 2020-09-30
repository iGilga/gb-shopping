<template lang="html">
  <div class="main">
    <Menu />
    <GoodList />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import GoodList from '@/components/GoodList.vue';

export default {
  name: 'Catalog',
  components: {
    Menu,
    GoodList,
  },
};
</script>

<style lang="stylus" scoped>

</style>
