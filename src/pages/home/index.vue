<template>
    <div>
        <mt-swipe :auto="4000" class='lunbo'>
            <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
                <a :href="item.url">
                <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9 my-ul">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link  to="/home/xiangqing" class='a'>
		                    <img src='../../assets/menu1.png'></img>
		                    <div class="mui-media-body">Home</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/" class='a'>
		                    <img src='../../assets/menu2.png'></img>
		                    <div class="mui-media-body">Email</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/" class='a'>
		                    <img src='../../assets/menu3.png'></img>
		                    <div class="mui-media-body">Chat</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/" class='a'>
		                    <img src='../../assets/menu4.png'></img>
		                    <div class="mui-media-body">location</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/" class='a'>
		                    <img src='../../assets/menu5.png'></img>
		                    <div class="mui-media-body">Search</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/" class='a'>
		                    <img src='../../assets/menu6.png'></img>
		                    <div class="mui-media-body">Phone</div></router-link></li>
		        </ul> 
		    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: []// 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
          this.lunbotuList = result.body.message;
      });
    }
  }
};
</script>
<style >
    .lunbo{
        height:200px;
    }
    .lunbo img{
        height:100%;
        width:100%;
    }


    .my-ul{
        background:#fff !important;
    }
     .mui-content .a img{
        height:80%;
        width:80%;
     }
     .mui-content > .mui-table-view:first-child {
        margin-top: 0px;
    }

    
</style>


