/**
 * 资质荣誉
 */
import Image from 'next/image';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export default function Page() {
  return (
    <>
      <div className="md:h-[70px]"></div>
      <section className=" relative overflow-hidden">
        <div className="relative  max-md:h-auto flex justify-center">
          <Image
            src={basePath + '/banner-about.jpg'}
            alt="img"
            width={1000}
            height={345}
            className="w-auto"
            priority
            placeholder="blur" // blur 图片加载之前的占位符
            // 占位符的base64编码
            blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
          />
        </div>
      </section>
      <section className=" relative overflow-hidden pt-[60px] pb-[30px]">
        <div className="max-w-[1200px] mx-auto overflow-hidden ">
          <h3 className="leading-[44px] text-center text-[32px] max-md:leading-8 max-md:text-lg text-foreground font-bold">
            资质证明
          </h3>
          <div className="pt-6 w-[80%] mx-auto">
            <Image
              src={basePath + '/zzzm.png'}
              alt="资质证明"
              width={1291}
              height={626}
            />
            <Image
              src={basePath + '/zzzm2.png'}
              alt="资质证明"
              width={1267}
              height={579}
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
