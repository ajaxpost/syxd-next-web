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
              在这里，我们将分享最新的行业动态、技术趋势和公司新闻。无论您是开发者、技术爱好者，还是希望了解更多行业资讯的读者，都可以在这里找到有价值的信息。我们致力于为您提供最新、最全面的内容，帮助您在快速变化的技术世界中保持领先。
            </p>
          </div>
        </div>
      </section>
      <section className=" relative overflow-hidden py-[60px] px-[40px] max-md:px-[5%]">
        <div className="min-h-[400px] max-w-[1200px] mx-auto overflow-hidden ">
          <div className="flex">
            {/* news list */}
            <ul className="flex-1">
              <li className="pb-[30px] border-b mb-[30px]">
                <div className="flex items-start justify-start max-md:flex-col">
                  {/* image */}
                  <div className="md:max-w-[190px] max-md:mb-4">
                    <Image
                      src="/blog-1.jpg"
                      alt="img"
                      width={220}
                      height={120}
                      className="w-auto h-auto"
                    />
                  </div>
                  {/* content */}
                  <div className="md:ml-6">
                    <h2 className="mb-3 text-[24px] leading-[32px] font-medium">
                      探索前沿技术，TechX与InnovateLab达成战略合作
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
                      近日，TechX与InnovateLab宣布达成战略合作，双方将在人工智能和大数据领域展开深度合作。此次合作旨在通过技术创新推动行业发展，提升企业竞争力。双方将共同开发新产品，并在多个行业应用场景中进行测试和推广，力求为客户提供更优质的解决方案...
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
                <div className="flex items-start justify-start max-md:flex-col">
                  {/* image */}
                  <div className="md:max-w-[190px] max-md:mb-4">
                    <Image
                      src="/blog-1.jpg"
                      alt="img"
                      width={220}
                      height={120}
                      className="w-auto h-auto"
                    />
                  </div>
                  {/* content */}
                  <div className="md:ml-6">
                    <h2 className="mb-3 text-[24px] leading-[32px] font-medium">
                      探索前沿技术，TechX与InnovateLab达成战略合作
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
                      近日，TechX与InnovateLab宣布达成战略合作，双方将在人工智能和大数据领域展开深度合作。此次合作旨在通过技术创新推动行业发展，提升企业竞争力。双方将共同开发新产品，并在多个行业应用场景中进行测试和推广，力求为客户提供更优质的解决方案...
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
            <div className="ml-7 max-md:hidden p-6 basis-[350px] min-w-[350px] flex-shrink-0 dark:bg-background bg-[#fafafa]">
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
                    探索前沿技术，TechX与InnovateLab达成战略合作
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    探索前沿技术，TechX与InnovateLab达成战略合作
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    探索前沿技术，TechX与InnovateLab达成战略合作
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    探索前沿技术，TechX与InnovateLab达成战略合作
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="#"
                    className="py-[5px] hover:text-[#234ae5] text-base leading-[24px] text-muted-foreground block"
                  >
                    探索前沿技术，TechX与InnovateLab达成战略合作
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
