import Link from 'next/link';
import Image from 'next/image';
import './style.css';
import {
  Cable,
  CodeXml,
  GraduationCap,
  PencilRuler,
  ShieldAlert,
  Waypoints,
} from 'lucide-react';

/**
 * 应用性能监控APM
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export default function Page() {
  return (
    <>
      <div className="md:h-[70px]"></div>
      <section className=" relative overflow-hidden">
        <div className="min-h-[400px] relative  max-md:h-auto max-md:bg-[#e0e6e8]">
          {/* bg-wrap */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden banner-wrap">
            <div
              className="absolute top-0 left-0 w-full h-full overflow-hidden banner"
              style={{
                backgroundImage: `url(${basePath}/iIRz3lRglgEcOf5N5FEBd.jpg)`,
              }}
            ></div>
          </div>
          {/* inner */}
          <div className="max-w-[1200px] pb-[30px] mx-auto pt-[62px] max-md:pt-[320px] h-full relative z-10">
            <div className="mb-3 flex items-center max-md:justify-center">
              <h1 className="text-[40px] leading-[52px] max-md:text-2xl  font-medium text-[#000] whitespace-nowrap overflow-hidden text-ellipsis">
                <span>应用性能监控 APM</span>
              </h1>
            </div>
            <p className="text-base leading-7 w-[60%] dark:text-[rgba(0,0,0,0.7)] max-md:hidden">
              应用性能监控（Application Performance
              Management，APM）是一款应用性能管理平台，基于实时多语言应用探针全量采集技术，为您提供分布式性能分析和故障自检能力。APM
              协助您在复杂的业务系统里快速定位性能问题，降低
              MTTR（平均故障恢复时间），实时了解并追踪应用性能，提升用户体验。
            </p>
            <p className="max-md:block hidden text-center dark:text-[rgba(0,0,0,0.7)] text-sm leading-6">
              一款应用性能管理平台，帮助您实时了解并追踪应用性能情况，提升用户体验。
            </p>
            <div className="mt-8 flex items-center max-md:justify-center max-md:px-8">
              <Link
                href="#"
                className="min-w-[152px] max-md:flex-1 hover:bg-[#528eff] h-[40px] px-6 whitespace-nowrap text-center text-sm font-medium leading-[38px] bg-[#2468f2]"
              >
                <span className="text-white">立即选购</span>
              </Link>
              <Link
                href="#"
                className="min-w-[152px] max-md:flex-1 ml-4 hover:border-[#2468f2] border transition-all h-[40px] px-6 whitespace-nowrap text-center text-sm font-medium leading-[38px] bg-white border-[#e5e7eb]"
              >
                <span className="text-[#2468f2]">产品文档</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="min-h-[446px] max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            产品特性
          </h3>
          <div className="grid md:grid-cols-3 max-sm:grid-cols-1 grid-cols-2 ">
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                {/* <Image
                  src={basePath + '/product-superiority01.svg'}
                  alt="product"
                  width={60}
                  height={60}
                  className="mb-4 inline-block"
                /> */}
                <Waypoints
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  拓扑自助发现
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    通过自动发现应用拓扑，帮助用户快速了解应用间的依赖关系，为性能问题定位提供依据。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                <Cable
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  调用链路追踪
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    微服务架构下，系统自动帮助用户构建每次请求的完整路径并收集丰富的上下游信息，实现快速定位性能瓶颈。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                <GraduationCap
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  稳定可靠
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    应用性能监控基于积淀了多年微服务链路追踪经验，为您提供稳定可靠的链路追踪能力。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                <PencilRuler
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  多维下钻分析
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    通过多维度分析，帮助用户快速定位性能问题，提供性能优化建议，提升用户体验。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                <ShieldAlert
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  实时告警
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    您可以根据应用性能波动设置合理的告警规则，当出现异常时给您发送告警通知，及时提升产品的可用性和用户体验。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="  cursor-default p-3 text-center">
                <CodeXml
                  size={60}
                  color="#2468f2"
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-2 text-foreground">
                  拥抱开源生态
                </div>
                <div className="flex justify-center items-center">
                  <p className=" w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    兼容业界通用的 Opentracing 标准，支持多语言协议和从
                    Skywalking、Jaeger
                    的平滑迁移。通过简单修改数据上报配置，即可迁移至应用性能监控，免除运维烦恼，减少开发成本。
                  </p>
                </div>
              </div>
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
