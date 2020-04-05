<template>
    <div class="login">
        <div class="left">
            <span><img src="@/assets/img/login_logo.png" alt=""></span>
            <span class="title">黑马面面</span>
            <span class="line">|</span>
            <span class="userLogin">用户登录</span>
        </div>
        <div class="right">
            <img src="@/assets/img/login_banner_ele.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',

    }
</script>

<style lang="less">
    @import url("~@/assets/css/base.css");

    .login {

        background: linear-gradient(225deg, rgba(20, 147, 250, 1), rgba(1, 198, 250, 1));
        display: flex;
        // 主轴
        justify-content: space-around;
        // 侧轴
        align-items: center;
        height: 100%;

        .left {
            width: 478px;
            height: 550px;
            background: rgba(245, 245, 245, 1);
            padding: 44px;

            .title {
                font-size: 24px;
                font-weight: 400;
                color: rgba(12, 12, 12, 1);
                margin-left: 15px;
                margin-right: 15px;
            }

            .line {
                font-size: 26px;
                color: rgba(199, 199, 199, 1);
            }

            .userLogin {
                font-size: 22px;
                font-family: PingFangSC;
                font-weight: 400;
                color: rgba(12, 12, 12, 1);
                margin-left: 15px;
            }
        }
    }
</style>