<template>
    <div>
            <!-- 球-->
            <transition name='ball'
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <div class='ball' ref='ball' id='ball' v-show="flag" ></div>
            </transition>
        <!-- 这里是商品轮播图区域 -->
        <mt-swipe :auto="4000" class='lunbo'>
            <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
                <img :src="item.src">
            </mt-swipe-item>
        </mt-swipe>
            <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p class="price">市场价：
                    <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：
                    <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
                </p>
                    <div class="numbox">
                        <span class="title">购买数量：</span>
                        
                        <input  
                        type="button" 
                        value="-"
                        @click="tt>1&&tt--"
                        >

                        <input type="number"
                        v-model="tt">

                        <input
                        type="button"
                        value="+"
                        @click="tt<all&&tt++"
                        >
                    </div>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="cc">加入购物车</mt-button>
                </p>
                </div>
            </div>
         </div>
            <!-- 商品参数区域 -->
        <div class="mui-card">
                        <div class="mui-card-header">商品参数</div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                            <p>商品货号：{{ goodsinfo.goods_no }}</p>
                            <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                            <p>上架时间：{{ goodsinfo.add_time | pc }}</p>
                            </div>
                        </div>
                        <div class="mui-card-footer">
                            <mt-button type="primary" size="large" plain @click='a'>图文介绍</mt-button>
                            <mt-button type="danger" size="large" plain @click='b'>商品评论</mt-button>
                        </div>
                 </div>
  
    </div>
 
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            lunbotuList:[],
            goodsinfo:[],
            all:[],
            tt:1,
            flag:false,
            flags:true
        }
    },
    created() {
        this.lunbo(),
        this.goodsinfos()
    },
    methods: {
        lunbo(){
               this.$http.get("getthumimages/" + this.id).then(res => {
                    this.lunbotuList = res.body.message;
                });
           },
        goodsinfos(){
            this.$http.get("goods/getinfo/" + this.id).then(res => {
                    this.goodsinfo=res.body.message[0]
                    this.all=this.goodsinfo.stock_quantity
                });
        },
        a(){
            this.$router.push("/home/shangpin2and1/" + this.id);
        },
        b(){
            this.$router.push("/home/shangpin2adn2/" + this.id);
        },
         beforeEnter(el) {
            el.style.transform = "translate(0, 0)"
         },
        enter(el, done) {
                // 刷新动画效果
                el.offsetWidth;
               // 获取小球的 在页面中的位置
                let aa = this.$refs.ball.getBoundingClientRect();
                // 获取 徽标 在页面中的位置
                let bb = document
                    .getElementById("bad")
                    .getBoundingClientRect()
                let w=bb.left-aa.left
                let h=bb.top-aa.top

                el.style.transform = `translate(${w}px, ${h}px)`;
                el.style.transition = "all 3s ease";
                done();
                    },
        afterEnter(el) {
                this.flag = !this.flag
                },
        cc(){
               this.flag = !this.flag
        }
    }
}
</script>


<style lang="less">
    .lunbo{
        height:200px;
        text-align: center;
            img{
             height:80%;
             width:80%;
             margin-top:20px;
        }
    }   
    .numbox{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin:10px 0;
            input{
                text-align: center;
                width:50px;
                height:30px;
                margin:0;
                padding:0
            }
    }
    .ball{
        height:15px;
        width:15px;
        background-color: pink;
         position: absolute;
          border-radius: 50%;
         top: 351px;
        left: 160px;
         z-index:9999999999999;
    }
</style>