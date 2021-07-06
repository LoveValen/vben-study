<template>
  <h1 @click="hendleClick">详情{{ state }}</h1>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    setup() {
      // const state = reactive({ count: 0 });

      function hendleClick() {
        //   state.count++;
        //   console.log(state);
      }

      return {
        // ...toRefs(state),
        hendleClick,
      };
    },
  });
</script>

<style></style>
