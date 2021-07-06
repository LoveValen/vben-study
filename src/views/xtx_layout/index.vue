<template>
  <div>
    <Nav @click="handleClick" />
    <Header />
    <Footer />
    <!-- 单个元素 -->
    <!-- <transition> -->
    <main>
      <!-- 嵌套路由 -->
      <RouterView />
    </main>
    <!-- </transition> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, getCurrentInstance, computed } from 'vue';
  import Nav from './default/nav/index.vue';
  import Header from './default/header/index.vue';
  import Footer from './default/footer/index.vue';
  export default defineComponent({
    components: { Nav, Header, Footer },

    setup() {
      const { ctx: _this } = getCurrentInstance() as any;
      console.log(_this.$route.path);
      const key = computed(() => _this.$route.path);
      function handleClick() {
        _this.$router.push({ path: '/production/erabbit/index' });
      }
      return {
        handleClick,
        key,
      };
    },
  });
</script>

<style lang="less" scoped></style>
