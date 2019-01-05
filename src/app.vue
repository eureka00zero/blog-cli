<template>
    <div>
        <img src="./images/logo.png" alt="logo">
        <span>{{msg}}</span>
        <p class="test">demo test</p>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'app',
    data(){
        return {
            msg:"Eureka   Zero"
        }
    },
    
}
</script>
<style>
    .test{
        color:red;
    }
</style>
<style lang="less">
    #app{
        img{width:100px;}
    }
</style>


