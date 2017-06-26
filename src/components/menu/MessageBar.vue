<template>
    <div class="header-message">
        <div class="l-container">
            <el-row>
                <el-col :span="18">
                    <span class="fc_p"><icon name="volume-up"></icon>最新消息:</span>222222
                </el-col>
                <el-col :span="6" class="text-r">
                    <icon name="star-o"></icon>加入收藏夹
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>

</script>

<style lang="less">
    @import '../../style/_var.less';
    @hm-bg: lighten(@black,10%);
    @hm-color : @white;
    .header-message {
        background: @hm-bg;
        height: @hm-height;
        line-height: @hm-height;
        color: @white;

        .header-notices {
            vertical-align: middle;
            display: inline-block;
            width:750px;
            height:@hm-height;
            line-height:@hm-height;
            margin-left: 5px;
            color:@white;
            font-size:12px;
            overflow:hidden;
            position:relative;

            li{
                float:left;
                height:@hm-height;
                width:100%;
                overflow:hidden;
                cursor: pointer;

                a {
                    color: @white;
                    height: @hm-height;
                    line-height: @hm-height;

                    &:hover {
                         color: @primary;
                         text-decoration: underline;
                    }
                }
            }
        }
        .header-loginbar-operate {
            cursor: pointer;
        }
    }



</style>
