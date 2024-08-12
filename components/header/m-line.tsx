'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import './header.css';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function MLine() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  const handlerClick = () => {
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setOpen(!open);
  };

  return (
    <>
      <div
        className={cn(
          'max-md:block hidden w-[50px] h-full text-white text-center relative text-sm cursor-pointer ml-auto',
          {
            'm-line-active': open,
            'm-line': !open,
          }
        )}
        onClick={handlerClick}
      >
        <span
          className="w-[18px] h-[2px] scale-y-[70%] absolute bg-foreground"
          style={{
            left: 'calc(50% - 9px)',
            top: 'calc(50% - 7px)',
          }}
        ></span>
        <span
          className="w-[18px] h-[2px] scale-y-[70%] absolute bg-foreground"
          style={{
            left: 'calc(50% - 9px)',
            top: 'calc(50% - 1px)',
          }}
        ></span>
        <span
          className="w-[18px] h-[2px] scale-y-[70%] absolute bg-foreground"
          style={{
            left: 'calc(50% - 9px)',
            bottom: 'calc(50% - 7px)',
          }}
        ></span>
      </div>

      <div
        className={cn(
          ' fixed top-0 mt-[50px] left-0 w-full h-screen px-8 bg-background text-foreground transition-all duration-300',
          {
            'opacity-0 -translate-y-10 -z-[1] invisible': !open,
            'opacity-100 translate-y-0 z-[1002]': open,
          }
        )}
      >
        <div className="pt-6 pb-[96px] my-0 mx-auto max-w-[288px]">
          <nav className="flex flex-col gap-5">
            <Link
              href="http://101.201.63.227:8082/sign_in"
              className=" py-2 border-b hover:text-[#4780f4] hover:border-[#4780f4] "
            >
              <span className="relative m-line-black">登录</span>
            </Link>
            <Link
              href="http://101.201.63.227:8082/"
              className=" py-2 border-b hover:text-[#4780f4] hover:border-[#4780f4]"
            >
              <span className="relative m-line-black">控制台</span>
            </Link>
          </nav>
          <div className="pt-10">
            <h3 className="mb-2 text-sm leading-[22px]">主题切换</h3>
            <div className=" inline-flex border rounded-full p-2 gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className={cn(
                        'bg-[#f8fafc] text-[#000] dark:bg-transparent dark:text-[#707987] flex justify-center items-center cursor-pointer  rounded-full w-5 h-5 '
                      )}
                      onClick={() => setTheme('light')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>浅色</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className={cn(
                        'flex  dark:bg-[#f8fafc] dark:text-[#000] text-[#707987] justify-center items-center cursor-pointer  rounded-full w-5 h-5 '
                      )}
                      onClick={() => setTheme('dark')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                        <path d="M19 11h2m-1 -1v2"></path>
                      </svg>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>深色</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
