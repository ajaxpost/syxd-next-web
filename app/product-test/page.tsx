import Link from 'next/link';
import Image from 'next/image';
import './style.css';

export default function Page() {
  return (
    <>
      <div className="md:h-[70px]"></div>
      <section className=" relative overflow-hidden">
        <div className="min-h-[400px] relative  max-md:h-auto max-md:bg-[#e0e6e8]">
          {/* bg-wrap */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden banner-wrap">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden banner"></div>
          </div>
          {/* inner */}
          <div className="max-w-[1200px] pb-[30px] mx-auto pt-[62px] max-md:pt-[320px] h-full relative z-10">
            <div className="mb-3 flex items-center max-md:justify-center">
              <h1 className="text-[40px] leading-[52px] max-md:text-2xl  font-medium text-[#000] whitespace-nowrap overflow-hidden text-ellipsis">
                <span>大标题</span>
              </h1>
            </div>
            <p className="text-base leading-7 w-[60%] dark:text-[rgba(0,0,0,0.7)] max-md:hidden">
              云服务器（Cloud Virtual Machine，CVM）提供安全可靠的弹性计算服务。
              您可以实时扩展或缩减计算资源，适应变化的业务需求，并只需按实际使用的资源计费。使用
              CVM 可以极大降低您的软硬件采购成本，简化 IT 运维工作。（描述
              desc）
            </p>
            <p className="max-md:block hidden text-center dark:text-[rgba(0,0,0,0.7)] text-sm leading-6">
              云服务器（Cloud Virtual
              Machine，CVM）提供安全可靠的弹性计算服务，助您轻松上云。
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
            产品优势
          </h3>
          <div className="grid md:grid-cols-4 max-sm:grid-cols-1 grid-cols-2  gap-5">
            <div className="p-4">
              <div className="  cursor-default p-6 text-center">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/product-superiority01.svg"
                  alt="product"
                  width={60}
                  height={60}
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-6 text-foreground">
                  虚拟机级隔离
                </div>
                <div className="flex justify-center items-center">
                  <p className=" max-sm:w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    支持操作系统级隔离，同时拥有普通云主机的隔离性和容器技术的便捷性，为客户提供更稳定、更安全、更可靠的应用部署选项。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="  cursor-default p-6 text-center">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/product-superiority01.svg"
                  alt="product"
                  width={60}
                  height={60}
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-6 text-foreground">
                  虚拟机级隔离
                </div>
                <div className="flex justify-center items-center">
                  <p className=" max-sm:w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    支持虚拟机的“热迁移”，保证客户业务高可用与无中断迁移，实现自动宕机迁移、快照备份。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="  cursor-default p-6 text-center">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/product-superiority01.svg"
                  alt="product"
                  width={60}
                  height={60}
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-6 text-foreground">
                  虚拟机级隔离
                </div>
                <div className="flex justify-center items-center">
                  <p className=" max-sm:w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    支持多种类型容器应用与虚拟机应用的混合部署，从而实现100%全业务覆盖。
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="  cursor-default p-6 text-center">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/product-superiority01.svg"
                  alt="product"
                  width={60}
                  height={60}
                  className="mb-4 inline-block"
                />
                <div className="text-base leading-[22px] mb-6 text-foreground">
                  虚拟机级隔离
                </div>
                <div className="flex justify-center items-center">
                  <p className=" max-sm:w-[80%] text-left text-muted-foreground text-sm leading-[30px] ">
                    可在一个集群上提供Windows、Linux等多种操作系统的虚拟机服务，支持容器应用与虚拟机应用的跨平台调用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden bg-[#fafbff] dark:bg-background pb-[30px] pt-[60px]">
        <div className="max-w-[1200px]  mx-auto overflow-hidden  min-h-[446px] ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            产品规格
          </h3>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-5">
            <div className="p-4 border hover:shadow bg-white dark:bg-background">
              <div className="py-6 px-8">
                <h2 className="text-base font-semibold mb-4">通用型云主机</h2>
                <div className="leading-[28px] text-foreground text-sm min-h-[85px]">
                  <p>高性价比，性能无约束</p>
                  <p>适用于中小型Web应用等通用场景</p>
                </div>
                <div className="border-t border-b mt-4 py-4 text-left flex flex-col gap-2">
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                </div>
                <div className="pt-6 flex justify-between leading-[32px]">
                  <div>
                    <span className="text-red-500 text-[20px] leading-[32px]">
                      4.57
                    </span>
                    &nbsp;元/天起
                  </div>
                  <Link
                    href="#"
                    className=" hover:bg-[#528eff]  leading-[37px] justify-center px-6 whitespace-nowrap  text-sm font-medium bg-[#2468f2]"
                  >
                    <span className="text-white">立即选购</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 border hover:shadow bg-white dark:bg-background">
              <div className="py-6 px-8">
                <h2 className="text-base font-semibold mb-4">通用型云主机</h2>
                <div className="leading-[28px] text-foreground text-sm min-h-[85px]">
                  <p>高性价比，性能无约束</p>
                  <p>适用于中小型Web应用等通用场景</p>
                </div>
                <div className="border-t border-b mt-4 py-4 text-left flex flex-col gap-2">
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                </div>
                <div className="pt-6 flex justify-between leading-[32px]">
                  <div>
                    <span className="text-red-500 text-[20px] leading-[32px]">
                      4.57
                    </span>
                    &nbsp;元/天起
                  </div>
                  <Link
                    href="#"
                    className=" hover:bg-[#528eff]  leading-[37px] justify-center px-6 whitespace-nowrap  text-sm font-medium bg-[#2468f2]"
                  >
                    <span className="text-white">立即选购</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 border hover:shadow bg-white dark:bg-background">
              <div className="py-6 px-8">
                <h2 className="text-base font-semibold mb-4">通用型云主机</h2>
                <div className="leading-[28px] text-foreground text-sm min-h-[85px]">
                  <p>高性价比，性能无约束</p>
                  <p>适用于中小型Web应用等通用场景</p>
                </div>
                <div className="border-t border-b mt-4 py-4 text-left flex flex-col gap-2">
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                  <div className="leading-[28px] flex">
                    <span>CPU内存</span>
                    &emsp;|&emsp;
                    <span>2核8G</span>
                  </div>
                </div>
                <div className="pt-6 flex justify-between leading-[32px]">
                  <div>
                    <span className="text-red-500 text-[20px] leading-[32px]">
                      4.57
                    </span>
                    &nbsp;元/天起
                  </div>
                  <Link
                    href="#"
                    className=" hover:bg-[#528eff]  leading-[37px] justify-center px-6 whitespace-nowrap  text-sm font-medium bg-[#2468f2]"
                  >
                    <span className="text-white">立即选购</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pb-[30px] pt-[60px]">
        <div className="max-w-[1200px] mx-auto overflow-hidden min-h-[446px]">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            功能特性
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5 max-md:px-10">
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="md:pr-[30%] md:pb-[10%] flex items-start">
                <Image
                  src="https://www.tenxcloud.com/assets/svg/cloud-server/functional-characteristics01.svg"
                  alt="img"
                  width={34}
                  height={34}
                />
                <div className="ml-3">
                  <h3 className="text-[18px] text-foreground leading-[28px] mb-4">
                    VNC控制台
                  </h3>
                  <div className="text-sm text-muted-foreground leading-[20px]">
                    提供VNC管理控制台，用户可通过VNC远程链接虚拟机
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pb-[30px] pt-[60px] bg-[#fafbff] dark:bg-background">
        <div className="max-w-[1200px] mx-auto overflow-hidden min-h-[446px]">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            应用场景
          </h3>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-5 max-md:px-[5%]">
            <div className="p-4 bg-background border hover:bg-[#2468f2] group">
              <div className="p-[40px]">
                <div className="w-[60px] mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full group-hover:text-white"
                  >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                    <path d="m12 15 5 6H7Z" />
                  </svg>
                </div>
                <div className="text-base mb-6 text-center group-hover:text-white">
                  虚拟机+容器混合架构
                </div>
                <p className="text-left leading-[30px] text-muted-foreground group-hover:text-white text-sm md:min-h-[250px]">
                  企业部分业务需要部署在对隔离性要求较高虚拟机上，而部分业务需要部署在更灵活的容器中，这种场景下，企业用户迫切的需要对这两种架构实现统一的管理与服务的互联互通，xxx容器云平台可以实现对容器+虚拟机的统一管理与资源调度，帮助用户快速实现虚拟机+容器的混合部署，避免两套体系人力重叠与浪费。
                </p>
              </div>
            </div>
            <div className="p-4 bg-background border hover:bg-[#2468f2] group">
              <div className="p-[40px]">
                <div className="w-[60px] mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full group-hover:text-white"
                  >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                    <path d="m12 15 5 6H7Z" />
                  </svg>
                </div>
                <div className="text-base mb-6 text-center group-hover:text-white">
                  虚拟机+容器混合架构
                </div>
                <p className="text-left leading-[30px] text-muted-foreground group-hover:text-white text-sm md:min-h-[250px]">
                  企业部分业务需要部署在对隔离性要求较高虚拟机上，而部分业务需要部署在更灵活的容器中，这种场景下，企业用户迫切的需要对这两种架构实现统一的管理与服务的互联互通，xxx容器云平台可以实现对容器+虚拟机的统一管理与资源调度，帮助用户快速实现虚拟机+容器的混合部署，避免两套体系人力重叠与浪费。
                </p>
              </div>
            </div>
            <div className="p-4 bg-background border hover:bg-[#2468f2] group">
              <div className="p-[40px]">
                <div className="w-[60px] mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full group-hover:text-white"
                  >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                    <path d="m12 15 5 6H7Z" />
                  </svg>
                </div>
                <div className="text-base mb-6 text-center group-hover:text-white">
                  虚拟机+容器混合架构
                </div>
                <p className="text-left leading-[30px] text-muted-foreground group-hover:text-white text-sm md:min-h-[250px]">
                  企业部分业务需要部署在对隔离性要求较高虚拟机上，而部分业务需要部署在更灵活的容器中，这种场景下，企业用户迫切的需要对这两种架构实现统一的管理与服务的互联互通，xxx容器云平台可以实现对容器+虚拟机的统一管理与资源调度，帮助用户快速实现虚拟机+容器的混合部署，避免两套体系人力重叠与浪费。
                </p>
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
