<template>
  <div class="app-footer">
    脚部
    <ul class="content">
      <li
        @click="active = index"
        class="content-item"
        :class="active === index ? 'centent-item-active' : ''"
        v-for="(value, index) in dateList"
        :key="index"
        >{{ value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  const dateList = ['年', '月', '日'];
  export default defineComponent({
    setup() {
      const active = ref(0);
      return {
        active,
        dateList,
      };
    },
  });
</script>

<style lang="less" scoped>
  .app-footer {
    .content {
      box-sizing: border-box;
      width: 210px;
      display: flex;
      align-items: center;
      height: 40px;
      margin: 0 auto;
      padding: 6px 10px;
      border-radius: 20px;
      background: tomato;
      color: #fff;
      &-item {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .centent-item-active {
        color: #333;
        background: skyblue;
        border-radius: 20px;
        transition: all 0.2s;
      }
    }
  }
</style>
