'use client';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
          <Link
            href="#"
            className=" h-full inline-block text-[16px] max-md:text-[14px] max-md:leading-[50px] leading-[70px] "
          >
            产品
          </Link>
          <div
            className={cn(
              ' absolute top-full left-0 transition-all origin-top-left',
              {
                '-z-1 invisible opacity-0 scale-95': type !== 'product',
                'z-[1002] opacity-100 scale-100': type === 'product',
              }
            )}
          >
            <div className="py-6 px-8 h-[250px] w-[500px] max-w-[700px] flex gap-5 bg-background border shadow-sm ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
