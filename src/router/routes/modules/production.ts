import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/production',
  name: 'Production',
  component: LAYOUT,
  redirect: '/production/index',
  meta: {
    icon: 'ic:outline-payment',
    title: t('routes.production.production'),
  },
  children: [
    {
      path: 'index',
      name: 'Production',
      component: () => import('/@/views/production/index.vue'),
      meta: {
        title: t('routes.production.production'),
      },
    },
  ],
};

export default dashboard;
