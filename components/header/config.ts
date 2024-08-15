import { NavConfigProps } from './data';

export const nav_conig: NavConfigProps[] = [
  {
    label: '产品',
    children: [
      {
        label: '中间件 whserver',
        path: '/product-test',
      },
      {
        label: 'APM',
        path: '/product-test',
      },
      {
        label: '日志服务',
        path: '/product-test',
      },
      {
        label: 'Prometheus 监控',
        path: '/product-test',
      },
      {
        label: '告警服务',
        path: '/product-test',
      },
    ],
  },
  {
    label: '客户案例',
    path: '/case',
  },
  {
    label: '最新动态',
    path: '/blog',
  },
  {
    label: '资质荣誉',
    path: '/hornor',
  },
  {
    label: '关于我们',
    path: '/about',
  },
];
