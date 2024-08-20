const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const config = [
  {
    title: '应用性能监控APM',
    desc: '实时监控应用性能，快速定位和解决性能瓶颈，确保系统高效稳定运行',
    btnText: '了解详情',
    btnHref: '/product/apm',
    video: basePath + '/video/b1.mp4',
    image: basePath + '/banner1.png',
  },
  {
    title: '智能运维管理平台',
    desc: '提供全面的运维管理解决方案，提升系统稳定性和运维效率',
    btnText: '了解详情',
    btnHref: '#',
    image: basePath + '/banner3.png',
  },
];
