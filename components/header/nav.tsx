'use client';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChartSpline } from 'lucide-react';

export default function Nav() {
  const [type, setType] = useState<'product' | undefined>(undefined);

  return (
    <>
      <div className="ml-7 flex gap-5 h-full max-md:hidden">
        <div
          className=" nav-menu-item px-4 hover:after:bg-foreground hover:text-[#2468f2] dark:hover:text-foreground"
          onMouseEnter={() => setType('product')}
          onMouseLeave={() => setType(undefined)}
        >
          <span className=" cursor-default h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] ">
            产品
          </span>
          <div
            className={cn(
              ' absolute top-full left-0 transition-all origin-top-left',
              {
                '-z-1 invisible opacity-0 scale-95': type !== 'product',
                'z-[1002] opacity-100 scale-100': type === 'product',
              }
            )}
          >
            <div className="py-6 px-8 h-[250px] min-w-[700px] w-auto  flex gap-5 bg-background border shadow-sm ">
              {/* <div className="pt-5 flex-1">
                <h2 className="text-base font-medium pb-3 border-b text-foreground">
                  APM应用性能监控
                </h2>
                <p className="pt-5 text-muted-foreground text-sm leading-[22px]">
                  易扩展，开源兼容，高性价比的 APM 服务
                </p>
                <Link
                  href="/product/ap"
                  className="mt-2 inline-block relative pb-1 text-sm leading-[22px] text-[#244ae5] border-b border-[#244ae5]"
                >
                  了解详情
                </Link>
              </div>
              <span className="h-full block w-[1px] bg-slate-200"></span>
              <div className="pt-5 flex-1">
                <h2 className="text-base font-medium pb-3 border-b text-foreground">
                  组件管理平台
                </h2>
                <p className="pt-5 text-muted-foreground text-sm leading-[22px]">
                  集成开箱即用的云原生底座和低码组件开发能力，支持组件生命周期管理
                </p>
                <Link
                  href="/product-test"
                  className="mt-2 inline-block relative pb-1 text-sm leading-[22px] text-[#244ae5] border-b border-[#244ae5]"
                >
                  了解详情
                </Link>
              </div>
               */}
              <div className="flex w-full text-foreground">
                <div className="flex-1">
                  <h2 className="text-base text-[#2468f2] font-semibold leading-[22px] mb-[10px]">
                    应用性能监控APM
                  </h2>
                  <ul>
                    <li className="hover:text-[#2468f2] group">
                      <Link
                        href="/product/apm"
                        className="flex justify-start items-start"
                      >
                        <ChartSpline className="mr-2 mt-1" size={16} />
                        <div className="text-base font-medium leading-[22px]">
                          <h3 className="mb-2">APM应用性能监控</h3>
                          <span className="text-muted-foreground text-sm leading-[22px] group-hover:text-[#2468f2]">
                            易扩展，开源兼容，高性价比的 APM 服务
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                  <br />
                  <h2 className="text-base text-[#2468f2] font-semibold leading-[22px] mb-[10px]">
                    安全与信创
                  </h2>
                  <ul></ul>
                </div>
                <div className="flex-1">
                  <h2 className="text-base text-[#2468f2] font-semibold leading-[22px] mb-[10px]">
                    IT运维管理
                  </h2>
                  <ul>
                    {/* <li className="hover:text-[#2468f2] group">
                      <Link
                        href="/product/apm"
                        className="flex justify-start items-start"
                      >
                        <ChartSpline className="mr-2 mt-1" size={16} />
                        <div className="text-base font-medium leading-[22px]">
                          <h3 className="mb-2">APM应用性能监控</h3>
                          <span className="text-muted-foreground text-sm leading-[22px] group-hover:text-[#2468f2]">
                            易扩展，开源兼容，高性价比的 APM 服务
                          </span>
                        </div>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" nav-menu-item px-4 hover:after:bg-foreground hover:text-[#2468f2] dark:hover:text-foreground">
          <Link
            href="/case"
            className=" h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] "
          >
            客户案例
          </Link>
        </div>

        <div className=" nav-menu-item px-4 hover:after:bg-foreground hover:text-[#2468f2] dark:hover:text-foreground">
          <Link
            href="/blog"
            className=" h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] "
          >
            最新动态
          </Link>
        </div>
        <div className=" nav-menu-item px-4 hover:after:bg-foreground hover:text-[#2468f2] dark:hover:text-foreground">
          <Link
            href="/hornor"
            className=" h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] "
          >
            资质荣誉
          </Link>
        </div>
        <div className=" nav-menu-item px-4 hover:after:bg-foreground hover:text-[#2468f2] dark:hover:text-foreground">
          <Link
            href="/about"
            className=" h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] "
          >
            关于我们
          </Link>
        </div>
      </div>
    </>
  );
}
