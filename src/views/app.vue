<template>
    <div class="app-container">
        <label>message:</label>
        <el-input v-model="message" @keyup.enter.native="handleSend"></el-input>
        <el-button style="margin: 10px 0" type="primary" @click="handleSend">send</el-button>
        <p v-for="(msg, index) in messages" :key="index">{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: "",
                messages: []
            }
        },
        methods: {
            handleSend() {
                if (!this.message) {
                    this.$message({type: "warning", message: "Please input your message."});
                    return;
                }
                this.messages.push(this.message);
            }
        }
    }
</script>
<style lang="less">
    .app-container {
        width: 400px;
        padding: 10px;
    }
</style>