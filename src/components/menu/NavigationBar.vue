<template>
<div class="header-navbar">
  <div class="l-container">
    <el-row>
      <el-col :span="18">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/issues">期刊</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/products">书籍</router-link></el-menu-item>
        </el-menu>
    </el-row>

  </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
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

        .el-row {
            height: @header-nav-height;
        }

        .el-menu--horizontal {
            height: @header-nav-height;

            .el-menu-item {
                height: @header-nav-height;
                line-height: @header-nav-height;
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
