<template>
  <header class="app-header">
    <div class="container">
      <h1 class="app-logo">
        <image src="">
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {},
  });
</script>

<style lang="less" scoped>
  .app-header {
    background-color: #fff;
    .container {
      .app-logo {
        width: 200px;
      }
    }
  }
</style>
