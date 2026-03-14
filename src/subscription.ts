import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 6489287752973274,
  name: 'RanshenのGDK订阅',
  version: 1,
  author: 'ranshen',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Ranshen1209/GKD-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
