import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const production: MenuModule = {
  menu: {
    path: '/production/erabbit',
    icon: 'ion:grid-outline',
    name: t('routes.production.production'),
  },
  orderNo: 50,
};

export default production;
