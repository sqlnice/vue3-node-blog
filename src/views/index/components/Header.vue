<template>
  <header class="header">
    <router-link class="link" to="/index">首页</router-link>
    <ElInput class="search-input" placeholder="请输入搜索内容"></ElInput>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';
export default defineComponent({
  name: 'myheader',
  components: {
    ElInput
  }
});
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 100px;
  background-color: #333;
  .link {
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  .search-input {
    width: 300px;
  }
}
</style>
