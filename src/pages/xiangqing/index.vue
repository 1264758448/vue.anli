<template>
  <div class="news-list-container">
    <ul class="mui-table-view">

      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/xxy/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | pc  }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("getnewslist").then(result => {
        this.newsList = result.body.message;
      });
    }
  }
};
</script>

<style>
.mui-table-view .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
</style>
