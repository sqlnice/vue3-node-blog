<template>
  <div class="view-content">
    <div class="content">
      <p class="title">{{ articleData.title }}</p>
      <div class="info">
        时间：{{ articleData.date }}
        <span style="margin-left: 30px;">标签：</span>
        <Tag v-for="(item, index) in articleData.tags" :key="index">{{
          item
        }}</Tag>
      </div>
      <VueMarkdown class="markdown" :source="articleData.content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'content',
  data() {
    return {
      articleData: ref({
        comments: [],
        content:
          '本教程主要讲解了怎么使用 Jenkins 和 Github Actions 部署前端项目。↵1. 第',
        date: '2020-10-26T03:59:01.919Z',
        month: 10,
        tags: ['前端', '前端工程化'],
        0: '前端',
        1: '前端工程化',
        title: '前端项目自动化部署,——超详细教程（Jenkins、Github Actions）',
        year: 2020
      })
    };
  },
  methods: {
    back() {
      console.log('back');
    }
  }
});
</script>

<style lang="less" scoped>
.view-content {
  border: 1px solid #dedede;
  background: #fff;
  padding: 20px;
  margin-bottom: -1px;
}
</style>
