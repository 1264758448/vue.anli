<template>
 <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表你的评论</mt-button>



    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            Id:this.id
        }
    },
    props:["id"]
}
</script>