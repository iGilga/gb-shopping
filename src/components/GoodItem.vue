<template lang="html">
  <b-col class="good-item">
    <div class="good-item-wrp">
      <b-img src="@/assets/img/300.jpeg" fluid alt="good" width="300"></b-img>
      <h5 class="good-title">{{ good.product_name }}</h5>
      <span class="good-price">{{ good.price }}</span>
      <b-button class="btn-add" variant="primary">Добавить</b-button>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['good'],
};
</script>

<style lang="stylus" scoped>
.good
  &-item
    margin-bottom 1em
    text-align center
    &-wrp
      border .1em solid black
      border-radius .1em
  &-title
    margin .2em 0
  &-price
    display block;
    margin .2em 0
.btn-add
  margin .2em 0
</style>
