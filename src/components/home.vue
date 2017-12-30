<template>
    <div class='home'>
        <ul v-loading="loading">
            <li v-for="item in listData" >
                <router-link to="/">
                    <img :src="item.author.avatar_url">
                </router-link>
                <span class="readCount">{{item.reply_count}}/{{item.visit_count}}</span>
                    <span v-if="item.top" class="typeT put_top">置顶</span>
                    <span v-else-if="item.good" class="typeT put_top">精华</span>
                    <span v-else-if="item.tab === 'share'" class="typeT topiclist-tab">分享</span>
                    <span  v-else-if="item.tab === 'ask'" class="typeT topiclist-tab">问答</span>
                    <span  v-else class="typeT topiclist-tab">分享</span>
                <router-link :to="{name:'content',params:{id:item.id}}" class="title">{{item.title}}</router-link>
            </li>
        </ul>
        <el-pagination class="pagination"   @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next" :total="1000">
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
  @import '../assets/css/home.scss';
</style>
