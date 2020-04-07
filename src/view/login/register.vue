<template>
    <el-dialog :visible.sync="dialogVisible" width="600px" :show-close="false" class="register">
        <div slot="title" class="registerTitle">用户注册</div>

    </el-dialog>

</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
            };
        },

    };
</script>

<style lang="less">
    .register {
        .registerTitle {
            text-align: center;
            height: 53px;
            line-height: 53px;
            background-color: #1493FA;
            font-size: 18px;
            font-weight: 400;
            color: #fff;
        }

        .el-dialog__header {
            padding: 0;
        }
    }
</style>