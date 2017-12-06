<template>
    <div class='home'>
        <ul>
            <li v-for="item in listData">
                <router-link to="/">
                    <img :src="item.author.avatar_url">
                </router-link>
                <span>{{item.reply_count}}/{{item.visit_count}}</span>
                <div v-if="item.top == true">
                    <span class="put_top">置顶</span>
                </div>
                <!--<div v-else-if="type === 'B'">-->
                    <!--B-->
                <!--</div>-->
                <!--<div v-else-if="type === 'C'">-->
                    <!--C-->
                <!--</div>-->
                <!--<div v-else>-->
                    <!--Not A/B/C-->
                <!--</div>-->
                <router-link to="/" class="title">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                list:[]
            };
        },
        beforeCreate(){},
        created(){
            this.$store.dispatch('getListAction')
        },
        computed:{
            listData(){
                return this.$store.state.list
            }
        }
    };
</script>

<style lang="scss" scoped>
  @import '../assets/css/home.scss'
</style>
