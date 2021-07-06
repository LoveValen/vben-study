<template>
  <header class="app-header">
    <div class="container">
      <h1 class="app-logo">
        <RouterLink :to="{ path: '/erabbit/home' }">小兔仙儿</RouterLink>
      </h1>
      <ul>
        <li v-for="value in navList" :key="value.id"></li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  const navList = [
    {
      id: 0,
      text: '请先登录',
    },
    {
      id: 1,
      text: '免费注册',
    },
    {
      id: 2,
      text: '我的订单',
    },
    {
      id: 3,
      text: '会员中心',
    },
    {
      id: 4,
      text: '帮助中心',
    },
    {
      id: 5,
      text: '关于我们',
    },
    {
      id: 6,
      text: '手机版',
    },
  ];
  export default defineComponent({
    setup() {
      navList;
    },
  });
</script>

<style lang="less" scoped>
  .app-header {
    background-color: #fff;
    .container {
      .app-logo {
        width: 200px;
        a {
          display: block;
          width: 100%;
          height: 130px;
          background: url('/@/design/images/logo.png') no-repeat center;
          background-size: 100%;
          color: #fff;
        }
      }
    }
  }
</style>
