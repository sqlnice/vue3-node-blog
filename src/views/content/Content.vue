<template>
  <div class="view-content">
    <div class="content">
      <div class="back" @click="back">
        <Icon type="ios-arrow-back" style="font-size: 30px" />返回
      </div>
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
    <!-- <div class="div-comment">
            <p class="p-comment">评论</p>
            <div class="comment" v-for="(item, index) in articleData.comments" :key="index">
                <p class="comment-title">
                    {{ item.location }} 用户（{{ item.user }}）
                    <span class="span-time">{{ item.time }}</span>
                </p>
                <div>
                    <VueMarkdown class="markdown" :source="item.comment"/>
                </div>
            </div>
            <div class="div-reply">
                <p class="p-reply">请友善评论</p>
                <textarea class="ivu-input" v-model="comment" style="resize: none; height: 140px" />
                <div class="div-btn">
                    <Button @click="reply">回复</Button>
                </div>
            </div>
        </div> -->
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

<style lang="less" scoped></style>
