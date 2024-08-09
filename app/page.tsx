import Banner from '@/components/banner';
import Distribution from '@/components/distribution';
import Product from '@/components/product';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Banner />
      <Product />
      <section className=" relative overflow-hidden">
        <div className="pt-20 text-center">
          <h3 className="leading-[44px] text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            安全、稳定、可信赖的产品与服务
          </h3>
        </div>
        <p className="mt-[10px] text-center leading-9 text-lg max-md:leading-[22px] max-md:text-sm max-md:mt-2 text-muted-foreground">
          技术最佳实践，助力产业互联！
        </p>
        <div className="s-w px-4 max-md:px-8 relative ">
          <div className=" h-[500px] border leading-[500px] text-center font-semibold text-6xl">
            TODO
          </div>
        </div>
      </section>
      <section className=" relative overflow-hidden">
        <div className="pt-20 text-center">
          <h3 className="leading-[44px] text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            左右布局
          </h3>
        </div>
        <p className="mt-[10px] text-center leading-9 text-lg max-md:leading-[22px] max-md:text-sm max-md:mt-2 text-muted-foreground">
          技术最佳实践，助力产业互联！
        </p>
        <Distribution />
      </section>
      <section className=" relative overflow-hidden">
        <div className="bg-[#262834] dark:bg-background dark:text-foreground dark:border-y text-white mt-14">
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
