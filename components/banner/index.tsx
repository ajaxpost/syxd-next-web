'use client';
/**
 * Banner component
 */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { config } from './config';
import './banner.css';

export default function Banner() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      speed();
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [frame]);

  const speed = () => {
    setFrame((o) => {
      if (o < config.length - 1) {
        return o + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <section className="max-md:h-[210px] h-[560px] relative">
      {/* banner wrap */}
      <div className="h-full w-full max-[100px]:bg-current mt-0">
        {config.map((item, key) => {
          return (
            <Link
              key={key}
              href={item.btnHref}
              className={cn(
                'absolute  overflow-hidden left-0 top-0 w-full h-full transition-opacity duration-1000',
                {
                  ' z-10 opacity-100': frame === key,
                  'z-0 opacity-0': frame !== key,
                }
              )}
            >
              {item.video && (
                <video
                  className="h-full max-w-none max-md:hidden absolute top-0 left-1/2 -translate-x-1/2"
                  loop
                  muted
                  autoPlay
                  src={item.video}
                ></video>
              )}

              <Image
                src={item.image}
                alt="banner"
                fill // 充满图片,这样可以不使用width,height了
                priority // 高优先级,预加载
                placeholder="blur" // blur 图片加载之前的占位符
                // 占位符的base64编码
                blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
                className={cn({
                  'max-md:block max-md:object-cover hidden': item.video,
                  'block object-cover': !item.video,
                })}
              />

              <div className=" relative z-20 max-md:pt-[60px] max-md:absolute top-[0px] max-md:left-8 left-4 text-left max-md:w-[190px] pt-[150px] s-w">
                <h2 className="p-0 font-semibold  text-[#222] text-[42px] leading-[42px] max-md:text-base max-md:leading-6">
                  {item.title}
                </h2>
                <p className="text-[#595959] text-lg mt-7 max-md:hidden leading-[28px] overflow-hidden">
                  {item.desc}
                </p>
                <span className="arr-white max-md:hidden inline-block align-middle cursor-pointer bg-[#2468f2] transition-colors hover:bg-[#528eff] rounded-sm text-base leading-[40px] text-white mt-8 w-[136px] h-[40px] font-semibold text-center">
                  {item.btnText}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/* banner page */}
      <div className=" s-w relative left-0 max-md:pl-8 pl-4 z-30 max-md:-top-[20%] -top-[33%] h-[17px]">
        {config.map((_, key) => {
          return (
            <div
              key={key}
              className=" inline-block py-[7px] w-9 h-full mr-2 cursor-pointer group"
              onClick={() => setFrame(key)}
            >
              <div className="h-1 bg-[rgba(0,0,0,0.12)] group-hover:bg-[rgba(36,104,242,0.12)] relative">
                <span
                  className={cn('absolute top-0 left-0 bg-[#2468f2] h-full', {
                    speedspan: frame === key,
                  })}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" absolute bottom-0 max-md:-bottom-[129px] left-0 z-30 bg-background grid grid-cols-4 max-md:grid-cols-2 w-full  border-y">
        <Link
          href="#"
          className="h-16 flex group justify-between items-center border-r max-md:border-b px-10 arr-black"
        >
          <span className="text-lg group-hover:text-[#2468f2] font-semibold ">
            免费试用
          </span>
        </Link>
        <Link
          href="#"
          className="h-16 flex group justify-between items-center md:border-r max-md:border-b px-10 arr-black"
        >
          <span className="text-lg group-hover:text-[#2468f2] font-semibold ">
            解决方案
          </span>
        </Link>
        <Link
          href="#"
          className="h-16 flex group justify-between items-center border-r px-10 arr-black"
        >
          <span className="text-lg group-hover:text-[#2468f2] font-semibold ">
            了解产品
          </span>
        </Link>
        <Link
          href="#"
          className="h-16 flex group justify-between items-center md:border-r px-10 arr-black"
        >
          <span className="text-lg group-hover:text-[#2468f2] font-semibold ">
            技术文档
          </span>
        </Link>
      </div>
    </section>
  );
}
