import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const production: AppRouteModule = {
  path: '/production',
  name: 'production',
  component: LAYOUT,
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.production.production'),
  },
  children: [
    // {
    //   path: '',
    //   name: 'detail',
    //   component: () => import('/@/views/xtx_layout/index.vue'),
    //   meta: {
    //     title: '小兔仙儿',
    //   },
    //   children: [
    //     {
    //       path: 'erabbit',
    //       name: 'Erabbit',
    //       component: () => import('/@/views/production/detail.vue'),
    //       meta: {
    //         title: '小兔仙儿首页',
    //       },
    //     },
    //   ],
    // },
    {
      path: 'index',
      name: 'Erabbit-PC',
      component: () => import('/@/views/production/index.vue'),
      meta: {
        title: '小兔仙儿PC端入口',
      },
    },
  ],
};

export default production;
