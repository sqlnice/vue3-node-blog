<template>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'myfooter'
});
</script>

<style lang="less" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #333;
  color: #fff;
}
</style>
