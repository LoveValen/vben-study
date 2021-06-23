import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const customer: AppRouteModule = {
  path: '/service',
  name: 'ServiceCustomer',
  component: LAYOUT,
  redirect: '/service/customer',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '我的学员',
  },
  children: [
    {
      path: 'customer',
      name: 'ServiceCustomerPage',
      component: () => import('/@/views/service/customer/index.vue'),
      meta: {
        title: '我的学员',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default customer;
