import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jzyd.coupon',
  name: '省钱快报',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击页面广告跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          activityIds: 'com.jzyd.coupon.page.launcher.mvp.SplashActivity',
          matches:
            '[visibleToUser=true][text.length<10][width<500 && height<300][text*="跳过" || text*="跳 过" || text*="关闭" || text*="跳過" || text~="(?is).*skip.*"]',
        },
      ],
    },
  ],
});
