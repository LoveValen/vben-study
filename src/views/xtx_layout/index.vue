<template>
  <div class="">
    <Nav />
    <Header />
    <!-- 单个元素 -->
    <transition>
      <main>
        <!-- 嵌套路由 -->
        <RouterView />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Nav from './default/nav/index.vue';
  import Header from './default/header/index.vue';
  import Footer from './default/footer/index.vue';
  export default defineComponent({
    components: { Nav, Header, Footer },

    setup() {},
  });
</script>

<style lang="less">
  @import '/@/design/xtx_pc/common.less';
</style>
