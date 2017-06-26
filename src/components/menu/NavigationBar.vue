<template>
<div class="header-navbar">
  <div class="l-container">
    <el-row>
      <el-col :span="18">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">栏目1</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><router-link to="/issues">期刊</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/products">书籍</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/goodscart" v-show="this.$store.state.userState.user.isLogin">购物车</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <ul class="header-userInfo">
          <transition name=fade>
            <li v-show="this.$store.state.userState.user.isLogin">{{this.$store.state.userState.user.email}}</li>
          </transition>

          <transition name=fade>
            <li><a @click="logout" v-show="this.$store.state.userState.user.isLogin">注销 <span class="glyphicon glyphicon-log-out"></span></a></li>
          </transition>

          <transition name=fade>
            <li>
              <router-link to="/login" v-show="!this.$store.state.userState.user.isLogin"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link>
            </li>
          </transition>
        </ul>
      </el-col>
    </el-row>

  </div>
</div>
</template>

<script>
  export default {
  data() {
    return {
      activeIndex: '1',
      showNavbar: false
    };
  },
  methods: {
    logout() {
      this.$store.commit('userLogout');
    }
//    getUserLoginState() {
//      return this.$store.state.userState.user.isLogin;
//    }
  }
};
</script>

<style lang="less">
    @import '../../style/_var.less';
    .header-navbar {
        background: @primary;

        a {
            text-decoration: none;
        }

        .el-menu {
            background: transparent;

            li {
                &:hover,&.is-active {
                     background: transparent;
                     border-bottom-color: @black;

                    a {
                        color: @black;
                    }
                 }

                .el-submenu__title {
                    .el-submenu__icon-arrow {
                        color: @black;
                    }
                    &:hover,&.is-active {
                         background: transparent;
                         border-bottom-color: @black;

                        a {
                            color: @black;
                        }
                    }
                }

                a {
                    color: lighten(@black,10%);
                }
            }
        }


    }

    ul.header-userInfo {
        list-style: none;
            li {
            display: inline-block;
            padding-top: 20px;
            color: @white;
        }
    }

</style>
