<template>
    <div class='home' v-loading="loading">
        <ul >
            <li v-for="item in listData">
                <router-link to="/">
                    <img :src="item.author.avatar_url">
                </router-link>
                <span>{{item.reply_count}}/{{item.visit_count}}</span>
                <div v-if="item.top">
                    <span class="put_top">置顶</span>
                </div>
                <div v-else-if="item.good">
                    <span class="put_top">精华</span>
                </div>
                <div v-else-if="item.tab === 'share'">
                    <span class="topiclist-tab">分享</span>
                </div>
                <div v-else-if="item.tab === 'ask'">
                    <span class="topiclist-tab">问答</span>
                </div>
                <div v-else>
                    <span class="topiclist-tab">分享</span>
                </div>
                <router-link to="/" class="title">{{item.title}}</router-link>
            </li>
        </ul>
        <el-pagination class="pagination" @size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="sizes, prev, pager, next" :total="10000">
        </el-pagination>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                list:[],
                currentPage: 1
            };
        },
        beforeCreate(){},
        created(){
            this.$store.dispatch('getListAction',{page:1,limit:10})
        },
        computed:{
            listData(){
                return this.$store.state.list
            },
            loading(){
                return this.$store.state.loading
            }
        },
        methods:{
            handleCurrentChange(val){
                console.log(`当前页: ${val}`);
                this.$store.state.loading = true
                this.$store.dispatch("getListAction",{page:val,limit:10})
            },
            handleSizeChange(val) {
                this.$store.state.loading = true
                console.log(`每页 ${val} 条`);
                this.$store.dispatch("getListAction",{page:1,limit:val})
            }
        }
    };
</script>

<style lang="scss" scoped>
  @import '../assets/css/home.scss'
</style>
