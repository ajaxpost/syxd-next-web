/**
 * 最新动态
 */
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import './style.css';

export default function Page() {
  return (
    <>
      <div className="md:h-[70px]"></div>
      <section className=" relative overflow-hidden">
        <div className="min-h-[400px] flex justify-center items-center relative  max-md:h-auto max-md:bg-[#e0e6e8]">
          {/* bg-wrap */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden blog-banner"></div>
          </div>
          {/* inner */}
          <div className="max-w-[1200px] pb-[30px] mx-auto h-full relative z-10">
            <div className="mb-3 flex items-center justify-center">
              <h1 className="text-[40px] leading-[52px] max-md:text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="text-white">最新动态</span>
              </h1>
            </div>
            <p className="text-base text-[rgba(255,255,255,0.85)] mt-4 leading-7 max-md:text-sm max-md:leading-6 text-center">
              时速云是一家专业的云原生应用及数据平台服务提供商，秉持“让计算产生价值，让数据成为资产”
              的使命，致力于帮助客户实现数字化转型。
            </p>
          </div>
        </div>
      </section>
      <section className=" relative overflow-hidden py-[60px] px-[40px]">
        <div className="min-h-[400px] max-w-[1200px] mx-auto overflow-hidden ">
          <div className="mx-6 flex">
            {/* news list */}
            <ul className="flex-1">
              <li className="pb-[30px] border-b mb-[30px]">
                <div className="flex items-start justify-start">
                  {/* image */}
                  <div className="max-w-[160px]">
                    <Image
                      src="https://blog.tenxcloud.com/wp-content/uploads/2024/06/%E5%A4%B4%E5%9B%BE-1.jpg"
                      alt="img"
                      width={160}
                      height={120}
                      className="w-auto h-auto"
                    />
                  </div>
                  {/* content */}
                  <div className="ml-6">
                    <h2 className="mb-3 text-[24px] leading-[32px] font-medium">
                      打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                    </h2>
                    <div className="mb-3 text-[#999] text-sm leading-[22px] font-medium">
                      <span className="text-[#3782E7]">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="mx-1">•</span>
                      <time dateTime="2024-06-07T13:50:22+08:00">
                        2024年6月7日
                      </time>
                    </div>
                    <p className="text-sm leading-[22px] text-muted-foreground mb-2">
                      日前，时速云旗下云原生应用平台（TCAP）产品与小佑科技镜界云原生安全检测平台完成产品兼容性互认证，产品运行稳定，性能优异。除产品层面适配认证外，双方还将就重点行业领域展开深度合作，共同推动云原生行业生态建设、发展。
                      产品兼容性互认证证书
                      时速云与小佑科技同为中国信通院云原生安全实验室首批成员单位，双方在云原生安全标准…
                    </p>
                    <Link
                      href="#"
                      className="text-[#3782E7] text-sm leading-[22px] font-medium"
                    >
                      阅读全文 &gt;&gt;
                    </Link>
                  </div>
                </div>
              </li>
              <li className="pb-[30px] border-b mb-[30px]">
                <div className="flex items-start justify-start">
                  {/* image */}
                  <div className="max-w-[160px]">
                    <Image
                      src="https://blog.tenxcloud.com/wp-content/uploads/2024/06/%E5%A4%B4%E5%9B%BE-1.jpg"
                      alt="img"
                      width={160}
                      height={120}
                      className="w-auto h-auto"
                    />
                  </div>
                  {/* content */}
                  <div className="ml-6">
                    <h2 className="mb-3 text-[24px] leading-[32px] font-medium">
                      打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                    </h2>
                    <div className="mb-3 text-[#999] text-sm leading-[22px] font-medium">
                      <span className="text-[#3782E7]">
                        <Link href="#">Admin</Link>
                      </span>
                      <span className="mx-1">•</span>
                      <time dateTime="2024-06-07T13:50:22+08:00">
                        2024年6月7日
                      </time>
                    </div>
                    <p className="text-sm leading-[22px] text-muted-foreground mb-2">
                      日前，时速云旗下云原生应用平台（TCAP）产品与小佑科技镜界云原生安全检测平台完成产品兼容性互认证，产品运行稳定，性能优异。除产品层面适配认证外，双方还将就重点行业领域展开深度合作，共同推动云原生行业生态建设、发展。
                      产品兼容性互认证证书
                      时速云与小佑科技同为中国信通院云原生安全实验室首批成员单位，双方在云原生安全标准…
                    </p>
                    <Link
                      href="#"
                      className="text-[#3782E7] text-sm leading-[22px] font-medium"
                    >
                      阅读全文 &gt;&gt;
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            {/* actions */}
            <div className="ml-7 p-6 basis-[350px] min-w-[350px] flex-shrink-0 dark:bg-background bg-[#fafafa]">
              <div className=" relative mb-6">
                <Input autoFocus className="pr-[60px]" />
                <Link
                  href="#"
                  className=" absolute top-0 w-[60px] text-sm leading-[22px] font-medium right-0 h-full flex items-center justify-center bg-[#234ae5] text-white"
                >
                  提&nbsp;交
                </Link>
              </div>
              <ul className=" list-none mb-5">
                <h2 className="text-[24px] mb-[10px] leading-[32px] font-medium pb-1 border-b-2">
                  <span className="border-b-2 border-[#234ae5] pb-[6px]">
                    热门分类
                  </span>
                </h2>
                <li>
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    产品动态
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    企业动态
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    客户案例
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    市场活动
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    技术分享
                  </Link>
                </li>
              </ul>
              <ul className=" list-none mb-5">
                <h2 className="text-[24px] mb-[10px] leading-[32px] font-medium pb-1 border-b-2">
                  <span className="border-b-2 border-[#234ae5] pb-[6px]">
                    近期文章
                  </span>
                </h2>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    打造更全面安全体验，时速云与小佑科技完成产品兼容互认证
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" relative overflow-hidden">
        <div className="bg-[#262834] dark:bg-background dark:text-foreground dark:border-y text-white">
          <div className=" text-center py-8 ">
            <p className="text-[32px] max-md:text-lg max-md:leading-[22px] font-medium leading-[32px]">
              让计算产生价值 让数据成为资产
            </p>
            <Link
              href="#"
              className="arr-white inline-block align-middle cursor-pointer border transition-colors hover:bg-[#528eff] hover:border-[#2468f2] rounded-sm text-base leading-[40px] text-white mt-8 w-[136px] h-[40px] font-semibold text-center"
            >
              了解详情
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}