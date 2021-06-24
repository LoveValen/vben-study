import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const order: AppRouteModule = {
  path: '/service',
  name: 'ServiceOrder',
  component: LAYOUT,
  // redirect: '/service/order',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '跟单管理',
  },
  children: [
    {
      path: 'order',
      name: 'ServiceOrderPage',
      component: () => import('/@/views/service/order/index.vue'),
      meta: {
        title: '跟单管理',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default order;
