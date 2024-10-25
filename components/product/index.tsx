import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import './product.css';

export default function Product() {
  return (
    <section className=" relative overflow-hidden">
      <div className="pb-20  bg-background">
        <div className="pt-20 text-center">
          <h3 className="leading-[44px] text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            一体化智能可观测平台
          </h3>
        </div>
        <p className="mt-[10px] mb-7 text-center leading-9 text-lg max-md:leading-[22px] max-md:text-sm max-md:mt-2 text-muted-foreground">
          集成APM、监控、告警、日志和中间件管理，全面掌握系统状态，确保高可用性和稳定性。
        </p>
        <div className="s-w px-4 max-md:px-8 relative ">
          <div className="grid max-md:flex flex-col grid-cols-4 max-xl:grid-cols-2 gap-5">
            <div className="col-span-1">
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[60px] pr-6 pl-8 xl:h-[480px] h-[420px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    应用性能监控
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="default">性能监控</Badge>
                  <Badge variant="default">故障排查</Badge>
                  <Badge variant="default">实时分析</Badge>
                </div>
                {/* list */}
                <ul className="flex flex-col gap-y-5 text-sm leading-[22px] font-medium pl-4">
                  <li className="relative">
                    <span className="absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>实时监控应用性能，快速定位性能瓶颈</span>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>提供详细的故障排查报告，帮助快速解决问题</span>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>通过实时分析，优化系统性能和资源利用率</span>
                  </li>
                </ul>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" h-[50px] text-center leading-[50px] bg-[#4780f4] rounded-sm text-white hover:bg-[#528eff] arr-white w-3/4 border inline-block"
                  >
                    <span className=" text-lg leading-[32px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[60px] pr-6 pl-8 xl:h-[480px] h-[420px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    容器云
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="secondary">可观测性</Badge>
                  <Badge variant="secondary">多维调度</Badge>
                </div>
                {/* list */}
                <ul className="flex flex-col gap-y-5 text-sm leading-[22px] font-medium pl-4">
                  <li className=" relative">
                    <span className=" absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>生产级的 Kubernetes 容器平台</span>
                  </li>
                  <li className=" relative">
                    <span className=" absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>支持云原生应用的全生命周期管理</span>
                  </li>

                  <li className=" relative">
                    <span className=" absolute -left-[15px] top-2 w-[5px] h-[5px] bg-[#ddd] rounded-full"></span>
                    <span>
                      全球首批通过 K8S 一致性认证，并获得可信云 Kubernetes 认证
                    </span>
                  </li>
                </ul>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" h-[50px] text-center leading-[50px] rounded-sm bg-[#4780f4] text-white hover:bg-[#528eff] arr-white w-3/4 border inline-block"
                  >
                    <span className=" text-lg leading-[32px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid max-md:flex flex-col grid-cols-2 grid-rows-2 gap-5">
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[30px] pr-6 pl-8 max-xl:h-[320px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    裸金属服务器
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="secondary">高隔离性</Badge>
                  <Badge variant="secondary">灵活快速</Badge>
                </div>
                {/* desc */}
                <p className="text-sm leading-[22px] font-medium">
                  独享的硬件资源、灵活快速的交付方式
                </p>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className="  text-center leading-[30px] max-xl:leading-[50px] rounded-sm bg-[#4780f4] text-white hover:bg-[#528eff] arr-white w-2/4 max-xl:w-3/4 border inline-block"
                  >
                    <span className=" text-sm max-xl:text-lg max-xl:leading-[32px] leading-[22px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[30px] pr-6 pl-8 max-xl:h-[320px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    裸金属服务器
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="secondary">高隔离性</Badge>
                  <Badge variant="secondary">灵活快速</Badge>
                </div>
                {/* desc */}
                <p className="text-sm leading-[22px] font-medium">
                  独享的硬件资源、灵活快速的交付方式
                </p>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className="  text-center leading-[30px] max-xl:leading-[50px] rounded-sm bg-[#4780f4] text-white hover:bg-[#528eff] arr-white w-2/4 max-xl:w-3/4 border inline-block"
                  >
                    <span className=" text-sm max-xl:text-lg max-xl:leading-[32px] leading-[22px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[30px] pr-6 pl-8 max-xl:h-[320px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    裸金属服务器
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="secondary">高隔离性</Badge>
                  <Badge variant="secondary">灵活快速</Badge>
                </div>
                {/* desc */}
                <p className="text-sm leading-[22px] font-medium">
                  独享的硬件资源、灵活快速的交付方式
                </p>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className="  text-center leading-[30px] max-xl:leading-[50px] rounded-sm bg-[#4780f4] text-white hover:bg-[#528eff] arr-white w-2/4 max-xl:w-3/4 border inline-block"
                  >
                    <span className=" text-sm max-xl:text-lg max-xl:leading-[32px] leading-[22px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-[#fbfcff] overflow-hidden group relative border dark:bg-background dark:border max-md:pt-[21px] pt-[30px] pr-6 pl-8 max-xl:h-[320px]">
                {/* HOT */}
                <span className=" absolute top-[7px] -right-[30px] w-[100px] text-center rotate-45 bg-red-500 text-white">
                  HOT
                </span>
                {/* 标题 */}
                <h2 className="font-semibold text-lg text-foreground leading-[22px] mb-6">
                  <Link href="#" className="hover:underline">
                    裸金属服务器
                  </Link>
                </h2>
                {/* tags */}
                <div className="flex items-center gap-1 mb-6">
                  <Badge variant="secondary">高隔离性</Badge>
                  <Badge variant="secondary">灵活快速</Badge>
                </div>
                {/* desc */}
                <p className="text-sm leading-[22px] font-medium">
                  独享的硬件资源、灵活快速的交付方式
                </p>
                {/* btn */}
                <div className=" absolute bottom-0 left-0 w-full mb-2 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className="  text-center leading-[30px] max-xl:leading-[50px] rounded-sm bg-[#4780f4] text-white hover:bg-[#528eff] arr-white w-2/4 max-xl:w-3/4 border inline-block"
                  >
                    <span className=" text-sm max-xl:text-lg max-xl:leading-[32px] leading-[22px] font-semibold">
                      了解详情
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
