<template>
  <el-row>
    <el-col :span="4" class="l-left"><MenuLeft></MenuLeft></el-col>
    <el-col :span="20">
      <div class="app-content">
        <keep-alive>
          <transition name="drop">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
      <footerView></footerView>
    </el-col>
  </el-row>
</template>

<script>
  import MenuLeft from './menu/MenuLeft';
  import bookCard from './bookCard';
  import footerView from './footerView';

  export default {
    components: {
      MenuLeft,
      bookCard,
      footerView
    },
    created() {
    this.$store.dispatch('loadUser');
  }
  };
</script>

<style lang="less">
  @import '../style/style.css';
  @import '../style/bootstrap-flat.min.css';
  @import '../style/_var.less';
  @import '../style/_common.less';

  .l-left {
    height: 100%;
    background: @black;
  }
</style>
