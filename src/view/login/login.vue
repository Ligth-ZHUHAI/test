<template>
    <div class="login">
        <div class="left">
            <span><img src="@/assets/img/login_logo.png" alt=""></span>
            <span class="title">黑马面面</span>
            <span class="line">|</span>
            <span class="userLogin">用户登录</span>
            <el-form ref="form" :model="form" label-width="0px" class="loginForm" :rules="rules">
                <el-form-item prop="phone">
                    <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="form.password" :show-password="true"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row>
                        <el-col :span="18">
                            <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="form.code"></el-input>
                        </el-col>
                        <el-col :span="6">

                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <div class="terms">
                <el-checkbox v-model="isCheck">
                    <span class="content">我已阅读并同 <el-link>用户协议</el-link>和 <el-link>隐私条款</el-link></span>
                </el-checkbox>
            </div>
            <div class="loginButton">
                <el-button type="primary" class="button" @click="loginClick">登录</el-button>
            </div>
            <div class="registerButton">
                <el-button type="primary" class="button" @click="registerClick">注册</el-button>
            </div>

            <register ref="register" />


        </div>
        <div class="right">
            <img src="@/assets/img/login_banner_ele.png" alt="">
        </div>
    </div>
</template>

<script>
    // 导入register子组件
    import register from './register'

    export default {
        name: 'login',
        components:{
            register,
        },
        data() {
            return {
                isCheck: false,
                form: {
                    phone: '',
                    password: '',
                    code: '',
                },
                rules: {
                    phone: [{
                        required: true,
                        message: '请输入手机号',
                        trigger: "blur"
                    }],
                    password: [{
                            required: true,
                            message: '请输入密码',
                            trigger: "blur"
                        },
                        {
                            min: 6,
                            max: 12,
                            message: '请输入6~12位',
                            trigger: 'blur'
                        }],
                    code: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: "blur"
                    },
                        {
                            min:4,
                            max:4,
                            message:'请输入4位数验证码'
                        }
                    ],
                }
            }
        },
        methods:{
            loginClick(){
                this.$refs.form.validate(result=>{
                    this.$message.success(result+'');
                })
            },
            registerClick(){
                this.$refs.register.dialogVisible = true
            }
        },
        // 环境变量
        // created(){
        //     alert(process.env.VUE_APP_URL);
        // }
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

            .loginForm {
                margin-top: 30px;
            }

            .terms {
                margin-bottom: 30px;

                .content {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    line-height: 16px;

                    a {
                        color: #3296FA
                    }
                }
            }

            .loginButton {
                margin-bottom: 20px;
            }

            .button {
                width: 394px;
            }

        }
    }
</style>