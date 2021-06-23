<!--
 * @Author: Vben
 * @Description: logo component
-->
<template>
  <div class="anticon" :class="getAppLogoClass">
    <!-- @click="goHome" -->
    <!-- <img src="../../../assets/images/logo.png" />

    <div class="ml-2 truncate md:opacity-100" :class="getTitleClass" v-show="showTitle">
      {{ title }}
    </div> -->
    <!-- <div class="ml-2 truncate md:opacity-100" :class="getTitleClass" v-show="showTitle">
      {{ title }}
    </div> -->
    <!-- <img src="../../../assets/images/logo.png" class="gp-logo" /> -->

    <img src="../../../assets/images/logo.png" class="gp-logo" />

    <Dropdown
      class="flex"
      placement="bottomLeft"
      @menuEvent="handleMenuEvent"
      :dropMenuList="[
        { text: '超级管理', event: 'admin' },
        { text: '客服系统', event: 'ser' },
        { text: '合作管理', event: 'coo' },
        { text: '内容管理', event: 'con' },
        { text: '财务管理', event: 'fin' },
        { text: '烘焙管理', event: 'bak' },
      ]"
      :trigger="['click']"
      overlayClassName="app-locale-picker-overlay"
    >
      <div class="flex items-center ml-2 truncate" :class="getTitleClass" v-show="showTitle"
        >客服系统 v2.0</div
      >
    </Dropdown>

    <!-- <Dropdown
      class="flex"
      placement="bottomLeft"
      :trigger="['click']"
      overlayClassName="app-locale-picker-overlay"
    >
      <img src="../../../assets/images/logo.png" />
      <span v-show="showTitle" class="flex items-center font-bold text-white cursor-pointer">
        <span class="ml-2 truncate">客服系统</span>
      </span>
       <span v-show="showTitle" class="flex items-center font-bold text-white cursor-pointer">
        <span class="ml-0 truncate">客服系统</span>
      </span>
    </Dropdown> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { PageEnum } from '/@/enums/pageEnum';
  import { Dropdown } from '/@/components/Dropdown';
  import { openWindow } from '/@/utils';
  import { useLoading } from '/@/components/Loading';

  import type { DropMenu } from '/@/components/Dropdown';

  // import { Dropdown } from 'ant-design-vue';

  const props = {
    /**
     * The theme of the current parent component
     */
    theme: { type: String, validator: (v) => ['light', 'dark'].includes(v) },
    /**
     * Whether to show title
     */
    showTitle: { type: Boolean, default: true },
    /**
     * The title is also displayed when the menu is collapsed
     */
    alwaysShowTitle: { type: Boolean },
  };

  export default defineComponent({
    name: 'AppLogo',
    components: {
      Dropdown,
    },
    props: props,
    setup(props) {
      const { prefixCls } = useDesign('app-logo');
      const { getCollapsedShowTitle } = useMenuSetting();
      const { title } = useGlobSetting();
      const go = useGo();

      const [openFullLoading] = useLoading({
        tip: '正在切换系统...',
      });

      const getAppLogoClass = computed(() => [
        prefixCls,
        props.theme,
        { 'collapsed-show-title': unref(getCollapsedShowTitle) },
      ]);

      const getTitleClass = computed(() => [
        `${prefixCls}__title`,
        {
          'xs:opacity-0': !props.alwaysShowTitle,
        },
      ]);

      function goHome() {
        go(PageEnum.BASE_HOME);
      }

      function handleMenuEvent(menu: DropMenu) {
        openFullLoading();

        switch (menu.event) {
          case 'admin':
            openWindow('/supermanage/teamuser', { target: '_self' });
            break;
          case 'ser':
            openWindow('/v2/', { target: '_self' });
            break;
          case 'coo':
            openWindow('/agency/agencymanage', { target: '_self' });
            break;
          case 'con':
            openWindow('/editor/agencymanage', { target: '_self' });
            break;
          case 'fin':
            openWindow('/FinanceManage', { target: '_self' });
            break;
          case 'bak':
            openWindow('/baking/article/1', { target: '_self' });
            break;
          default:
            break;
        }
        console.log(menu);
      }

      return {
        handleMenuEvent,
        getAppLogoClass,
        getTitleClass,
        getCollapsedShowTitle,
        goHome,
        title,
        prefixCls,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.light {
      border-bottom: 1px solid @border-color-base;
    }

    &.collapsed-show-title {
      padding-left: 20px;
    }

    &.light &__title {
      color: @primary-color;
    }

    &.dark &__title {
      color: @white;
    }

    &__title {
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
    }

    & .gp-logo {
      width: 81px;
      height: 32px;
      object-fit: contain;
    }
  }
</style>
