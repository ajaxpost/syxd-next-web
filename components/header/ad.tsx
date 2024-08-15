/**
 * 广告组件
 */

import Link from 'next/link';

export default function Ad() {
  return (
    <div className=" relative z-30 top-0 left-0 h-[70px] max-md:h-[50px] text-sm leading-[22px] w-full">
      <Link
        href=""
        className=" block h-full bg-no-repeat w-full"
        style={{
          background:
            'url(https://s3.cn-north-1.jdcloud-oss.com/jdcloud-portal/www.jcloud.com/ea61dc87-918b-479b-ad2f-14e2f4a4c2a120240809184431.jpg)',
          backgroundPosition: '50%',
          backgroundSize: '1920px 70px',
        }}
      ></Link>
    </div>
  );
}
