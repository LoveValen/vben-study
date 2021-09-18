<template>
  <div class="page-home">
    <div class="container">
      <!-- 左侧导航栏 -->
      <HomeCategory />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRef, toRefs } from 'vue';
  import HomeCategory from './components/home-category.vue';
  export default defineComponent({
    components: {
      HomeCategory,
    },
    setup() {
      return {};
    },
  });
</script>

<style lang="less" scoped>
  .page-home {
    .container {
      // height: 500px;
    }
  }
</style>
