<template>
    <div class="header-loginbar">
        <div class="l-container">
            <el-row>
                <el-col :span="6">
                    <img :src=logo class="logo">
                </el-col>
                <el-col :span="18" class="text-r" v-if="userInfo.user_id">
                    <el-row :gutter="20" class="header-user-info">
                        <el-col :span="5" :offset="12">{{ userInfo.username }}</el-col>
                        <el-col :span="5">{{ userInfo.fAvailable }}</el-col>
                        <el-col :span="2"><el-button type="primary">退出</el-button></el-col>
                    </el-row>
                </el-col>
                <el-col :span="18" class="text-r" v-else>
                    <el-row :gutter="20" class="header-user-info">
                        <el-col :span="5" :offset="12"><el-input v-model="username" placeholder="登陆账号"></el-input></el-col>
                        <el-col :span="5"><el-input v-model="password" type="password" placeholder="登陆密码"></el-input></el-col>
                        <el-col :span="2"><el-button type="primary" @click="login">登陆</el-button></el-col>
                    </el-row>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    import md5 from 'md5'

    export default {
        data() {
            return {
                userInfo: this.$store.state.appState.userInfo,
                username: '',
                password: '',
                logo: require('img/logo.png'),
            }
        },
        methods: {
            login() {
                if (this.username.length <= 0) {
                    this.$message({
                        showClose: true,
                        message: '请输登陆账号',
                        type: 'error'
                    });
                    return false;
                }

                if (this.password.length <= 0) {
                    this.$message({
                        showClose: true,
                        message: '请输入登陆密码',
                        type: 'error'
                    });
                    return false;
                }

                this.axios({
                    url: this.CONFIG.HTTP_SERVER.login.url,
                    method: this.CONFIG.HTTP_SERVER.login.method,
                    data: {
                        username: this.username.toLowerCase(),
                        password: md5(md5(md5(this.username + this.password))),
                    },
                    isShowLoading: true
                })
                .then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>

<style lang="less">
    @import '../../style/_var.less';
    @hl-bg: @black;
    @hl-color : @white;

    .header-loginbar{
        position: relative;
        z-index: @zIndexHead;
        height:@header-loginbar-height;
        background:@hl-bg;
        color: @hl-color;
        width: 100%;

        .logo {
            height: @header-loginbar-height;
            display: block;
        }
    }

    .header-user-info {
        margin-top: 35px;

        .el-input__inner {
            background-color: transparent;
            color: @white;
            border-radius: 0;
            border: 1px solid @white;
        }

        .el-button {
            border-radius: 0;
        }
    }



</style>
