<template>
    <div class="box">
        <div class="blank"></div>
        <article-dom :author.sync="author" class="firstDom"></article-dom>
        <side-dom :author="author"  class="secDom"></side-dom>
        <div class="blank"></div>
    </div>

</template>

<script>
    import articleDom from '../views/article'
    import sideDom from '../views/side'
    export default {
        data(){
            return {
                author : ''
            }
        },
        components: {
            articleDom,
            sideDom
        }
    }

</script>
<style lang="scss" scoped>
    .box{
        margin-top: 20px;
        /*width: 100%;*/
        display: flex;
    }
    .blank{
        flex: 2;
    }
    .firstDom{
      flex: 8;
    }
    .secDom{
        margin-left: 20px;
     flex: 2;
    }
</style>
