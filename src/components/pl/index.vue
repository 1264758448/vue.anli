<template>
 <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model='msg'></textarea>

    <mt-button type="primary" size="large" @click='fabiao'>发表你写的评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in all" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | pc }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain  @click="getMore">加载更多评论</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            // Id:this.id,
            page: 1, 
            all: [] ,
            msg:''
        }
    },
    props:["id"],
    created() {
        this.pp()
    },
    methods: {
        pp(){
            this.$http.get("getcomments/" + this.id + "?pageindex=" + this.page).then(res=>{
                this.all = this.all.concat(res.body.message);
            })
        },
        fabiao(){
            if (this.msg.trim().length === 0)
            return alert("评论内容不能为空哦亲!");
            this.$http.post("postcomment/" + this.id, { content: this.msg }).then(res=>{
                this.all=[];
                this.page=1;
                this.pp();
                this.msg=''
            })
        },
        getMore() {
        this.page++;
        this.pp();
        }
        
    }
}
</script>