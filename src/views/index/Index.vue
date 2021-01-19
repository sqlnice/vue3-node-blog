<template>
  <div class="home">
    <MyHeader />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyHeader from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Main,
    Footer,
    MyHeader
  }
});
</script>
