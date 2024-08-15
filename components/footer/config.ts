import { FootNavConfigProps } from './data';

export const FootNavConfig: FootNavConfigProps[] = [
  {
    title: '产品列表',
    children: [
      {
        title: '中间件 whserver',
        path: '/product-test',
      },
      {
        title: 'APM',
        path: '/product-test',
      },
      {
        title: '日志服务',
        path: '/product-test',
      },
      {
        title: 'Prometheus 监控',
        path: '/product-test',
      },
      {
        title: '告警服务',
        path: '/product-test',
      },
    ],
  },
  {
    title: '支持与服务',
    children: [
      {
        title: '产品文档',
      },
      {
        title: '白皮书',
      },
      {
        title: '视频中心',
      },
      {
        title: '常见问题',
      },
    ],
  },
  {
    title: '关于我们',
    children: [
      {
        title: '公司介绍',
        path: '/about',
      },
      {
        title: '最新动态',
        path: '/blog',
      },
      {
        title: '资质荣誉',
        path: '/hornor',
      },
    ],
  },
  {
    title: '友情链接',
    children: [
      {
        title: '微呼科技',
        path: 'https://www.v-call.cn/',
        target: '_blank',
      },
    ],
  },
];
