<template>
    <div>
      <!-- 顶部滑动区域 -->
      <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
            <a
                :class="['mui-control-item', { 'mui-active' : item.id == 0 } ]"
                v-for="(item) in all"
                :key="item.id"
                @click="lists(item.id)"
            >{{item.title}}</a>
            </div>
        </div>
        </div>
     <!-- 图片列表区域 -->
        <div>
            <ul class="photo-list">
                <router-link v-for="item in listss" :key="item.id" :to="'/home/tupian/' + item.id" tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                    </div>
                </router-link>
             </ul>
        </div>
    </div>
</template>
<script>
import mui from "@/lib/mui/js/mui.js";
export default {
    data(){
        return{
            all:[],
            listss:[],
        }
    },
    created() {
        this.mas()
        this.lists(0)
    },
      mounted() {
        mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 
        });
    },
    methods: {
            mas(){
                this.$http.get('getimgcategory').then(res=>{
                    res.body.message.unshift(
                        {
                            title:'全部',
                            id:0
                        }
                    ),
                    this.all=res.body.message
     
                })
            },
            lists(id){
                this.$http.get("getimages/" + id).then(res=>{
                    this.listss=res.body.message
                })
            }
    },
}
</script>
<style lang="less">
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
   li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>