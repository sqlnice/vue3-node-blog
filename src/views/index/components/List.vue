<template>
  <div class="list">
    <ul @click="gotoContent">
      <li v-for="(item, index) in articlesData" :key="index" class="content-li">
        <p class="p-title" :data-index="index">{{ item.title }}</p>
        <p class="date">{{ item.date }}</p>
      </li>
    </ul>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElPagination } from 'element-plus';
export default defineComponent({
  name: 'list',
  components: { ElPagination },
  data() {
    return {
      articlesData: ref([
        {
          title: '我是标题我是标题我是标题我是标题',
          date: '2021年1月14日 23:53:55'
        }
      ])
    };
  },
  methods: {
    gotoContent() {
      this.$router.push('/index/detail');
    }
  }
});
</script>

<style lang="less" scoped>
.content-li {
  background: #fff;
  padding: 20px;
  border: 1px solid #dedede;
  margin-bottom: -1px;
  display: flex;
  justify-content: space-between;
}
.p-title {
  font-size: 18px;
  color: #666;
  cursor: pointer;
}
.date {
  color: #bcbcbc;
  font-size: 12px;
  margin-top: 10px;
}
.tag-title {
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
}
.page {
  margin-top: 20px;
}
.pagination {
  float: right;
  margin-top: 20px;
}
</style>
