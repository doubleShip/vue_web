<template>
    <header>
        <MessageBar></MessageBar>
        <LoginBanner></LoginBanner>
        <NavigationBar></NavigationBar>
    </header>
</template>

<script>
    import MessageBar from './menu/MessageBar';
    import LoginBanner from './menu/LoginBanner';
    import NavigationBar from './menu/NavigationBar';
    export default {
        components: {
            MessageBar,
            LoginBanner,
            NavigationBar,
        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        created() {
            //获取用户信息
            this.axios({
                url: this.CONFIG.HTTP_SERVER.getSignInfo.url,
                method: this.CONFIG.HTTP_SERVER.getSignInfo.method,
            })
            .then((response) => {
                console.log(response)
                if(response.isSuccess) {
                    this.$store.dispatch('updateUserInfo',response.data)
                }
            })
        },
        methods: {

        }
    }
</script>

<style lang="less">
    @import '../style/_var.less';

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: @zIndexHead;
    }

</style>
