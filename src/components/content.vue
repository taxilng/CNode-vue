<template>
    <div>
        <div class='secDiv'>
            <div>
            <span v-if="article.top">
                <span class="put_top">置顶</span>
            </span>
                <span v-else-if="article.good">
                <span class="put_top">精华</span>
            </span>
                <span v-else-if="article.tab === 'share'">
                <span class="topiclist-tab">分享</span>
            </span>
                <span v-else-if="article.tab === 'ask'">
                <span class="topiclist-tab">问答</span>
            </span>
                <span v-else>
                <span class="topiclist-tab">分享</span>
            </span>
                <h3>{{article.title}}</h3>
            </div>
            <span class='marginSpan'>发布于：{{createdTime}}</span>
            <router-link to='/'>作者：{{article.author.loginname}}</router-link>
            <span class='marginSpan'>浏览量：{{article.visit_count}}</span>
            <span>来自：{{article.tab}}</span>
            <div v-html='article.content' id='content'></div>
            <div id='reply'>
                <div v-for='reply in article.replies' class='replySec' :key='reply.length'>
                    <router-link to='/'><img :src='reply.author.avatar_url'></router-link>
                    <div>
                        <div class='replyUp'>
                            <span class='replyName'>{{reply.author.loginname}}</span>
                            <!--<span>{{dealCommentTime(reply.create_at)}}</span>-->
                            <span v-if='reply.ups.length > 0' class='thumbsClass'>
                          <!--<icon name='thumbs-up' scale='2'></icon>-->
                            <span>{{reply.ups.length}}</span>
                        </span>
                        </div>
                        <p v-html='reply.content'></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                article: {
                    author: {
                        loginname: '',
                    }
                }
            }
        },
        beforeRouteEnter(to, from, next){
            next((vm) => {
//                vm.getTopicsDetail();
            })
        },
        computed:{
          createdTime(){
//              return this.article.create_at.match(/.{10}/)[0]
              return String(this.article.create_at).substr(0,10)
          }
        },
        methods: {
            getTopicsDetail(){
//                this.$http.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id)
//                    .then((data)=>{
//                        console.log(data);
//                    })
//                    .catch((error)=>{
//                        console.log(error);
//                    })

                this.$http({
                    url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
                    method: 'get'
                })
                    .then((data) => {
                        console.log(data);
                        this.article = data.data.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        created(){
            this.getTopicsDetail()
        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/css/content.scss'
</style>
