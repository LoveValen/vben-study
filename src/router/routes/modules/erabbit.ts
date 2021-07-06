import type { AppRouteModule } from '/@/router/types';

const erabbit: AppRouteModule = {
  path: '/erabbit',
  name: 'erabbit',
  component: () => import('/@/views/xtx_layout/index.vue'),
  meta: {
    title: '小兔仙儿',
  },
  children: [
    {
      path: 'home',
      name: 'Erabbit',
      component: () => import('/@/views/erabbit/home.vue'),
      meta: {
        title: '小兔仙儿首页',
      },
    },
  ],
};

export default erabbit;
