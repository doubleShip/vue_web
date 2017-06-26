<template>

  <el-row>
    <el-col :span="24">
      <MessageBar></MessageBar>
      <NavigationBar></NavigationBar>
      <div class="l-container">
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
import NavigationBar from './menu/NavigationBar';
import MessageBar from './menu/MessageBar';
import bookCard from './bookCard';
import footerView from './footerView';

export default {
  components: {
    NavigationBar,
    MessageBar,
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


</style>
