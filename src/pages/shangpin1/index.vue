<template>
    <div class='goods-list'>
        <router-link class="goods-item" v-for="item in dd" :key="item.id" :to="'/home/shangpin2/' + item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                <span class="now">￥{{ item.sell_price }}</span>
                <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                <span>热卖中</span>
                <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link>
    <mt-button type="danger" size="large" @click="getmor">加载更多</mt-button>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            dd:[],
            page:1
        }
    },
    created() {
        this.pc()
    },
    methods: {
        pc(){
            this.$http.get("getgoods?pageindex=" + this.page).then(res=>{
                this.dd=this.dd.concat(res.body.message)
            })
        },
        getmor(){
            this.page++;
            this.pc();
        }
    },
}
</script>
<style lang="less" >
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
