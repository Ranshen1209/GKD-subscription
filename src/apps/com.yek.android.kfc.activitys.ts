import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yek.android.kfc.activitys',
  name: '肯德基',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告右上角跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          activityIds: 'com.yum.brandkfc.ui.SplashProgressNewDialog',
          matches:
            '[vid="splash_tv_3" || id="com.yek.android.kfc.activitys:id/splash_tv_3"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
