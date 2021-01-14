<template>
  <header class="header">
    <ElInput class="search-input"></ElInput>
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
  justify-content: flex-end;
  height: 60px;
  padding: 0 20px;
  background-color: #333;
  .search-input {
    width: 300px;
  }
}
</style>
