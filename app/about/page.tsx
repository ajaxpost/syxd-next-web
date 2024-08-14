/**
 * 关于我们
 */
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="md:h-[70px]"></div>
      <section className=" relative overflow-hidden">
        <div className="relative  max-md:h-auto max-md:bg-[#e0e6e8]">
          <Image
            src="/banner-about.jpg"
            alt="img"
            width={1000}
            height={345}
            className="w-auto"
          />
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            公司介绍
          </h3>
          <div className="pt-6 w-[80%] mx-auto">
            <p className="text-base leading-[42px] font-medium">
              北京微呼科技有限公司（简称“微呼科技”）作为国内深耕行业的“智能触达”解决方案提供商，一直专注于toB、toG领域，拥有自主研发的核心AI知识产权，并具备增值电信业务经营许可资质，具有AI落地所必需的稳定通讯资源，集“AI+通讯”能力于一身。微呼科技运用创新的人工智能与知识图谱技术、多维度的通讯能力，搭建了口碑优秀的智能语音、通信、号码认证平台，形成自主且完善的智能应用解决方案。我们的解决方案，可灵活采用私有化部署、云服务等多种方式，为金融、物流、汽车、电商、公共机构等众多行业客户提供专业高效的智能服务，持续满足客户的智能先进化需求。
            </p>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            奖项证书
          </h3>
          <div className="pt-6 w-[80%] mx-auto">
            <Image src="/jxzs.png" alt="奖项证书" width={1309} height={619} />
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            资质证明
          </h3>
          <div className="pt-6 w-[80%] mx-auto">
            <Image src="/zzzm.png" alt="资质证明" width={1291} height={626} />
            <Image src="/zzzm2.png" alt="资质证明" width={1267} height={579} />
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
