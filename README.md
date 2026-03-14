# RanshenのGDK订阅

个人自用的 GKD 订阅仓库，基于官方模板维护。

## 订阅地址

- GitHub Raw:

```txt
https://raw.githubusercontent.com/Ranshen1209/GKD-subscription/main/dist/gkd.json5
```

- jsDelivr:

```txt
https://fastly.jsdelivr.net/gh/Ranshen1209/GKD-subscription@main/dist/gkd.json5
```

## 当前已迁移应用

- 微信
- 中国农业银行
- 高德地图
- 滴滴出行
- 铁路12306
- 得物
- 拼多多
- 小米商城
- 淘宝
- 美团外卖
- 大麦
- 麦当劳
- 哔哩哔哩
- 网易云音乐
- 酷安
- 小红书
- 雪球
- IT之家

## 本地使用

```sh
pnpm install
pnpm run check
pnpm run build
```

构建产物位于 [./dist](./dist) 目录。

## 目录结构

- 订阅信息: [./src/subscription.ts](./src/subscription.ts)
- 分类配置: [./src/categories.ts](./src/categories.ts)
- 全局规则: [./src/globalGroups.ts](./src/globalGroups.ts)
- 应用规则: [./src/apps](./src/apps)

## 说明

- 当前以个人常用应用为主，规则主要来自迁移和整理。
- 默认仅分类中标记为启用的规则会在 GKD 中默认开启，其余规则建议按需启用。
- 若某条规则失效，建议结合快照和官方文档自行调整。

## 参考

- [GKD 官网](https://gkd.li/)
- [GKD 使用文档](https://gkd.li/guide/)
- [GKD API 文档](https://gkd.li/api/)
