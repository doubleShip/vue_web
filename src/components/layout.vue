<template>

  <el-row>
    <el-col :span="24">
      <HeaderView></HeaderView>
      <div class="l-container app-main">
        <keep-alive>
          <transition name="drop">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
      <!--<FooterView></FooterView>-->
    </el-col>
  </el-row>
</template>

<script>
import HeaderView from './HeaderView';
import FooterView from './FooterView';

export default {
    components: {
        HeaderView,
        FooterView
    },
    created() {
        this.$store.dispatch('loadUser')
    }
};
</script>

<style lang="less">
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
@import '../style/_var.less';
@import '../style/_common.less';

    .app-main {
        padding-top: ~"calc(@{header-loginbar-height} + @{header-nav-height} + @{hm-height})";
    }
</style>
