<template>
  <header class="app-header">
    <div class="container">
      <h1 class="app-logo">
        <RouterLink :to="{ path: '/erabbit/home' }">小兔仙儿</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li v-for="value in navList" :key="value.id">
          <a
            href="javascript:;"
            @mouseover="enterHandler(value.id)"
            @mouseout="leaveHandler(value.id)"
            >{{ value.text }}</a
          >
        </li>
      </ul>
      <!-- 弹出层 -->
      <div class="app-header-diolog" :class="showHeader ? 'show-diolog' : ''">
        <a class="app-header-img-nav">
          <img
            src="https://yanxuan.nosdn.127.net/45b50d5f8afbd6fdef97314647dcb7db.png?quality=95&imageView"
            alt=""
          />
          <span>文字</span>
        </a>
      </div>
      <div class="app-search">
        <SearchOutlined />
        <input class="app-search-input" type="text" placeholder="搜一搜" />
      </div>
      <div class="app-cart">
        <img :src="cartSvg" alt="" />
        <span class="cart-order">1</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import cartSvg from '/@/assets/svg/cart.svg';
  const navList = [
    {
      id: 0,
      text: '首页',
    },
    {
      id: 1,
      text: '美食',
    },
    {
      id: 2,
      text: '餐厨',
    },
    {
      id: 3,
      text: '艺术',
    },
    {
      id: 4,
      text: '电器',
    },
    {
      id: 5,
      text: '居家',
    },
    {
      id: 6,
      text: '洗护',
    },
    {
      id: 7,
      text: '孕婴',
    },
    {
      id: 8,
      text: '服装',
    },
    {
      id: 9,
      text: '杂项',
    },
  ];
  export default defineComponent({
    components: {
      SearchOutlined,
    },
    setup() {
      let showHeader = ref(false);
      const enterHandler = function (id: number): void {
        if(id === 0) return
        showHeader.value = true;
      };
      const leaveHandler = function (id: number): void {
        if(id === 0) return
        showHeader.value = false;
      };
      return {
        navList,
        cartSvg,
        showHeader,
        enterHandler,
        leaveHandler,
      };
    },
  });
</script>

<style lang="less" scoped>
  // @import '/@/design/xtx_pc/variables.less';
  .app-header {
    background-color: #fff;
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      .app-header-nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        li {
          position: relative;
          a {
            display: block;
            padding: 15px;
            margin: 0 10px;
            &::after {
              position: absolute;
              content: '';
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: @xtxColor;
              transform: scale(0);
            }
            &:hover {
              color: @xtxColor;
              &::after {
                transition: all 0.5s;
                transform: scale(0.5);
              }
            }
          }
        }
      }
      .app-header-diolog {
        opacity: 0;
        position: absolute;
        top: 110px;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 0px;
        background: #fff;
        box-shadow: 0 3px 10px 3px rgb(0 0 0 / 6%);
        .app-header-img-nav {
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          img {
            width: 70px;
            height: 70px;
          }
        }
      }
      .show-diolog {
        opacity: 1;
        height: 130px;
        transition: all 0.5s;
      }
      .app-search {
        position: relative;
        :deep(.anticon) {
          position: absolute;
          top: 7px;
          left: 3px;
          font-size: 18px;
        }
        &-input {
          padding: 6px 4px;
          padding-left: 24px;
          border-bottom: 1px solid #e7e7e7;
        }
      }
      .app-cart {
        position: relative;
        img {
          width: 30px;
          background: transparent;
        }
        .cart-order {
          position: absolute;
          top: 0;
          left: 20px;
          z-index: 9;
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          padding: 3px 5px;
          border-radius: 8px;
          background: @priceColor;
          color: #fff;
        }
      }
    }
  }
</style>
