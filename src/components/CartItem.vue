<template lang="html">
  <b-row>
    <b-col>
      {{ item.title }} - {{ item.price }} - {{ item.quantity }}
    </b-col>
    <b-col cols="auto">
      <b-button
        size="sm"
        variant="outline-danger"
        align-h="end"
        @click="removeCart(item)">
        <b-icon icon="x"/>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['item'],
  methods: {
    ...mapActions('cart', [
      'removeCart',
    ]),
  },
};
</script>

<style lang="stylus" scoped>
</style>
