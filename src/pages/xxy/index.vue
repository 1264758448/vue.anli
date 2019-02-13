<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ pc.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
        <span>发表时间：{{ pc.add_time | pc }}</span>
        <span>点击：{{ pc.click }}次了</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="pc.content"></div>

        <pl :id='id'></pl>
    </div>
</template>
<script>
export default {
    data(){
        return{
           id:this.$route.params.id,
           pc:{}
        }
    },
    created(){
        this.qingqiu()
    },
    methods: {
        qingqiu(){
            this.$http.get("getnew/" + this.id).then(res=>{
                this.pc= res.body.message[0];
                // console.log(this.pc)
            })
        }
    },
}
</script>
<style>
    .newsinfo-container img{
        width:100%
    }
</style>
