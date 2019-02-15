<template>
    <div>
        <h3>{{ppcc.title}}</h3>
        <p class="subtitle">
        <span>发表的时间：{{ ppcc.add_time | pc }}</span>
        <span>点击：{{ ppcc.click }}次</span>
        </p>
        <hr>



        <div class='tu'>
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
        </div>



        <pl :id='id'></pl>
   </div>
</template>
<script>
export default {
    data(){
        return{
             id: this.$route.params.id,
             ppcc:[],
             list:[]
         }
        },
    created() {
        this.nadao(),
        this.tu()
    },
    methods: {
        nadao(){
            this.$http.get("getimageInfo/" + this.id).then(res=>{
                this.ppcc=res.body.message[0]
                console.log(this.ppcc.title)
            })
        },
        tu(){
            this.$http.get("getthumimages/" + this.id).then(res=>{
                res.body.message.forEach(i=>{
                        i.w=600,
                        i.h=400
                    })
                        this.list= res.body.message
                    console.log(this.list)
            })  
        }
    },
}
</script>
<style>
   .tu img{
        margin:20px;
       box-shadow: 0px 0px 6px pink;
    }
</style>