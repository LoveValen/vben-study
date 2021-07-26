<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul class="container_content">
        <li v-for="value in navList" :key="value.id">
          <a href="javascript:;">{{ value.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';

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
      onMounted(() => {
        let i = document.createElement('i');
        i.classList.add('iconfont', 'icon-phone');
        i.style.color = '#fff';
        let liList = document.querySelectorAll('.container_content > li');
        liList[liList.length - 1].prepend(i);
      });
      return {
        navList,
      };
    },
  });
</script>

<style lang="less" scoped>
  .app-top-nav {
    background: #333;
    .container {
      &_content {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          height: 20px;
          border-left: 1px solid #eee;
          font-size: 14px;
          &:first-child {
            border-left: none;
          }
          a {
            padding: 0 15px;
            color: #fff;
          }
          &:last-child {
            padding-left: 3px;
            a {
              padding-left: 2px;
            }
          }
        }
      }
    }
  }
</style>
