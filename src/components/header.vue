<template>
    <div class='head'>
        <router-link to='/'>
            <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
        </router-link>
        <el-input type="text" placeholder="请输入内容" class="searchBox" prefix-icon="el-icon-search"></el-input>
        <el-button class="about" type='text' @click='dialogVisible=true'>关于</el-button>
        <el-dialog title='Vue.js重写CnodeJS社区' :visible.sync='dialogVisible' center width="500px">
            <div class='dialogDiv'>
                <span>
                    <strong>作者: &nbsp;&nbsp;</strong>
                </span>
                <span>
                <a href='https://github.com/taxilng' target='_blank'>卡卡罗特</a>
                </span>
                <br>
                <span>
                    <strong>源代码: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://github.com/taxilng/CNode-vue' target='_blank'>Github</a>
                <span class='star'>&nbsp;&nbsp;Star Star</span>
                <br>
                <br>
                <span>
                    <strong>技术栈: </strong>
                </span>
                <ul>
                    <li>Vue.js</li>
                    <li>ElementUI</li>
                    <li>nodejs</li>
                    <li>CnodeJS API</li>
                </ul>
            </div>
        </el-dialog>
    </div>
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

<style scoped>
    /*@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");*/
    html, body {
        margin: 0;
        padding: 0;
    }

    .searchBox {
        margin-left: 50px;
        width: 150px;
        height: 57.6px;
        /*display: inline-block;*/
        line-height: 58px;
    }
    .head {
        background: #324057;
        height: 58px;
        width: 100%;

    }

    .head img {
        float: left;
        width: 160px;
        height: 56px;
        margin-left: 160px;
    }

    .head > button {
        display: inline-block;
        float: right;
        line-height: 48px;
        margin-right: 160px;
        font-weight: bold;
        font-size: 20px;
        color: white;
        letter-spacing: 2px;
        padding-top:3.2px;
    }

    .head .dialogDiv {
        font-size: 17px;
    }

    .head ul {
        margin-left: 16px;
    }

    .head a {
        text-decoration: none;
        color: #13CE66;
    }

    .head .star {
        font-weight: bold;
        color: #1D8CE0;
        font-size: 20px;
    }
    @media screen and (max-width:600px){
        .searchBox,.head > button.about {
            display: none;
        }
    }
</style>
