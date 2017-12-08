<template>
    <div class="box">
        <article-dom class="firstDom"></article-dom>
        <side-dom  class="secDom"></side-dom>
    </div>

</template>

<script>
    import articleDom from '../views/article'
    import sideDom from '../views/side'
    export default {
        components: {
            articleDom,
            sideDom
        }
    }

</script>
<style lang="scss" scoped>
    .box{
        display: flex;
    }
    .firstDom{
      flex: 5;
    }
    .secDom{
     flex: 1;
    }
</style>
