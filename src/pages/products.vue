<template>
<div id="__wrapper">
  <div class="products-content">
    <keep-alive>
      <transition name="slide-right">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</div>
</template>

<script>
import productsDetailInfo from './productsDetailInfo';
import productsHome from './productsHome';
import productsPreview from './productsPreview';

export default {
  components: {
    productsDetailInfo,
    productsHome,
    productsPreview
  }
};
</script>

<style lang="less">
@import '../style/_var.less';
</style>
