/**
 * 客户案例
 */
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import './style.css';

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
          <div className="max-w-[1200px] pb-[30px] mx-auto pt-[122px] max-md:pt-[320px] h-full relative z-10">
            <div className="mb-3 flex items-center max-md:justify-center">
              <h1 className="text-[40px] leading-[52px] max-md:text-2xl  font-medium text-[#000] whitespace-nowrap overflow-hidden text-ellipsis">
                <span>客户案例</span>
              </h1>
            </div>
            <p className="text-base leading-7 max-md:w-full max-md:text-center max-md:text-sm max-md:leading-6 w-[60%] dark:text-[rgba(0,0,0,0.7)] ">
              盛易信达 Syxd 正在为众多企业提供云原生应用及数据平台服务
            </p>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden bg-[#fafbff] dark:bg-background">
        <div className="min-h-[200px] p-[40px] max-w-[1200px] mx-auto overflow-hidden ">
          <div className="grid grid-cols-3 gap-5">
            <div>
              <h3 className="text-center text-[40px] max-md:text-[32px] text-[#2468f2] mb-1 font-bold">
                500+
              </h3>
              <p className="text-base text-center max-md:text-sm">
                助力 500+ 中大型企业 实现数字化转型
              </p>
            </div>
            <div>
              <h3 className="text-center text-[40px] max-md:text-[32px] text-[#2468f2] mb-1 font-bold">
                10+
              </h3>
              <p className="text-base text-center max-md:text-sm">
                助力 500+ 中大型企业 实现数字化转型
              </p>
            </div>
            <div>
              <h3 className="text-center text-[40px] max-md:text-[32px] text-[#2468f2] mb-1 font-bold">
                60%
              </h3>
              <p className="text-base text-center max-md:text-sm">
                助力 500+ 中大型企业 实现数字化转型
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="min-h-[446px] max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            精选案例
          </h3>
          <div className="grid md:grid-cols-3 max-sm:grid-cols-1 grid-cols-2  gap-5">
            <div className="py-6 px-4">
              <Link href="#">
                <div className="border cursor-pointer overflow-hidden">
                  {/* img */}
                  <div className="w-full relative h-[250px] mb-6 overflow-hidden">
                    <Image src={basePath + '/国家电网.png'} alt="img" fill />
                  </div>
                  {/* title */}
                  <h2 className="px-6 text-base font-bold mb-5">国家电网</h2>
                  <p className="px-6 mb-5 text-muted-foreground text-sm leading-[22px] overflow-hidden">
                    国家电网以投资建设运营电网为核心业务，作为关系国家能源安全和国民经济命脉的特大型国有重点骨干企业，始终围绕建设“具有中国特色国际领先的能源互联网企业”的战略目标，积极推进数字化转型。
                  </p>
                  {/* tags */}
                  <div className="px-6 mb-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </div>
                  <div className="px-6 text-muted-foreground mb-6 text-sm">
                    <span>DevOps、微服务、定制开发、实施服务</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="py-6 px-4">
              <Link href="#">
                <div className="border cursor-pointer overflow-hidden">
                  {/* img */}
                  <div className="w-full relative h-[250px] mb-6 overflow-hidden">
                    <Image src={basePath + '/国家电网.png'} alt="img" fill />
                  </div>
                  {/* title */}
                  <h2 className="px-6 text-base font-bold mb-5">国家电网</h2>
                  <p className="px-6 mb-5 text-muted-foreground text-sm leading-[22px] overflow-hidden">
                    国家电网以投资建设运营电网为核心业务，作为关系国家能源安全和国民经济命脉的特大型国有重点骨干企业，始终围绕建设“具有中国特色国际领先的能源互联网企业”的战略目标，积极推进数字化转型。
                  </p>
                  {/* tags */}
                  <div className="px-6 mb-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </div>
                  <div className="px-6 text-muted-foreground mb-6 text-sm">
                    <span>DevOps、微服务、定制开发、实施服务</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="py-6 px-4">
              <Link href="#">
                <div className="border cursor-pointer overflow-hidden">
                  {/* img */}
                  <div className="w-full relative h-[250px] mb-6 overflow-hidden">
                    <Image src={basePath + '/国家电网.png'} alt="img" fill />
                  </div>
                  {/* title */}
                  <h2 className="px-6 text-base font-bold mb-5">国家电网</h2>
                  <p className="px-6 mb-5 text-muted-foreground text-sm leading-[22px] overflow-hidden">
                    国家电网以投资建设运营电网为核心业务，作为关系国家能源安全和国民经济命脉的特大型国有重点骨干企业，始终围绕建设“具有中国特色国际领先的能源互联网企业”的战略目标，积极推进数字化转型。
                  </p>
                  {/* tags */}
                  <div className="px-6 mb-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </div>
                  <div className="px-6 text-muted-foreground mb-6 text-sm">
                    <span>DevOps、微服务、定制开发、实施服务</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t-4 hidden dark:block"></div>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px] bg-[#fafbff] dark:bg-background">
        <div className="min-h-[446px] max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            合作伙伴
          </h3>
          <div className="pt-6 overflow-hidden flex justify-center items-center">
            <Image
              src={basePath + '/hzhb.png'}
              alt="合作伙伴"
              width={921}
              height={548}
            />
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
