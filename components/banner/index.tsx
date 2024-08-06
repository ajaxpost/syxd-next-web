/**
 * Banner component
 */

import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="max-md:h-[210px] h-[560px] relative">
      {/* banner wrap */}
      <div className="h-full w-full max-[100px]:bg-current mt-0">
        <Link
          href="#"
          className="absolute  overflow-hidden left-0 top-0 w-full h-full z-10 opacity-100"
        >
          <video
            className="h-full max-w-none max-md:hidden absolute top-0 left-1/2 -translate-x-1/2"
            loop
            muted
            autoPlay
            src="https://bce.bdstatic.com/p3m/common-service/uploads/qiand_a53a42d.mp4"
          >
            1
          </video>
          <Image
            src="/banner1.png"
            alt="banner"
            fill // 充满图片,这样可以不使用width,height了
            priority // 高优先级,预加载
            quality={100} // 图片质量 1-100
            placeholder="blur" // blur 图片加载之前的占位符
            // 占位符的base64编码
            blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
            sizes="(max-width: 640px) 100vw, 640px"
            className="max-md:block max-md:object-cover  hidden "
          />

          <div className=" relative z-20 max-md:pt-0 max-md:absolute top-[60px] left-[16px] text-left max-md:w-[190px] pt-[190px] s-w">
            <h2 className="p-0 font-semibold  text-[#222] text-[42px] leading-[42px] max-md:text-base max-md:leading-6">
              百度智能云千帆大模型平台 上线文心大模型4.0 Turbo
            </h2>
            <p className="text-[#595959] text-lg mt-7 max-md:hidden leading-[28px] overflow-hidden">
              爆款云主机2C4G低至158元/1年，限时领1000京豆
            </p>
            <span className="arr-white max-md:hidden inline-block align-middle cursor-pointer bg-[#2468f2] transition-colors hover:bg-[#528eff] rounded-sm text-base leading-[40px] text-white mt-8 w-[136px] h-[40px] font-semibold text-center">
              了解详情
            </span>
          </div>
        </Link>
      </div>
      {/* banner page */}
    </section>
  );
}
