<template>
    <div class='sideDiv'>
        <div class="header">
           <span>作者</span>
        </div>
        <div class="inner">
        <div class="userInfo">
            <router-link to='/'><img :src='userInfo.avatar_url'></router-link>
            <span>{{userInfo.loginname}}</span>
        </div>
        <p>
            <icon name='score' scale='3'></icon>{{userInfo.score}}
        </p>
        <p>
            <icon name='github' scale='3'></icon>
            <a :href="'https://github.com/'+userInfo.githubUsername" target="_blank">#GitHub#</a>
        </p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userInfo:{},
            }
        },
        props:["author"],
        methods: {
            getUser(){
               this.$http.get('https://cnodejs.org/api/v1/user/'+this.author)
                   .then((data)=>{
                       // console.log(data);
                       this.userInfo = data.data.data;
                   })
                   .catch((error)=>{
                       console.log(error);
                   })

            }
        },
        computed:{},
        watch:{
            author(newVal){
                // console.log(newVal);
                this.getUser()
            }
        },
        created(){

        }
    }
</script>
<style scoped>
    .sideDiv {
        /*width: 20%;*/
        height: 320px;
        background: #fff;
        border: 1px solid #ddd;
        word-break: break-all;
        font-size: 16px;
        /*padding: 16px;*/
    }
    .sideDiv .header{
        color: #51585c;
        padding: 10px;
        border-radius: 3px 3px 0 0;
        background-color: #f6f6f6;
    }
    .sideDiv .inner{
        padding: 10px;
    }

    .sideDiv .userInfo {
        display: flex;
        align-items: flex-end;
        /*margin-bottom: 32px;*/
    }
    a{
        color: #778087;
        text-decoration: none;
    }
    .sideDiv .userInfo span {
        font-size: 16px;
        margin-left: 16px;
        color: black;
        display: inline-block;
        height: 48px;
        line-height: 48px;
    }

    .sideDiv p {
        display: flex;
        align-items: center;
        color: #475669;
    }

    .sideDiv p svg {
        margin-right: 16px;
    }

    img {
        width: 48px;
        height: 48px;
    }
</style>
