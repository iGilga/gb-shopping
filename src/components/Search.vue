<template lang="html">
  <b-input-group>
    <b-form-input v-model="searchText" v-on:change="onText" type="text">
    </b-form-input>
    <b-input-group-append>
      <b-input-group-text>
        <b-icon icon="search" />
      </b-input-group-text>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    onText(value) {
      this.$store.dispatch('goods/filter', { text: value });
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
