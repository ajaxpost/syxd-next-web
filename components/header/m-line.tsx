'use client';
import { useEffect, useState } from 'react';
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
import { NavConfigProps, userInfoProps } from './data';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import cookies from 'js-cookie';
import { toast } from 'sonner';
import { Plus, X } from 'lucide-react';
import { nav_conig } from './config';

const url = process.env.NEXT_PUBLIC_CONSOLE_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export default function MLine({ userInfo }: { userInfo: userInfoProps }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'nav' | 'user'>('nav');
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const handlerClick = (t: typeof type) => {
    if (!open) {
      setType(t);
    }
    setOpen(!open);
  };

  const logout = async () => {
    const result = await fetch('/api/logout', {
      method: 'post',
    });
    const data = await result.json();
    if (data.code === 200) {
      const allCookies = cookies.get();
      for (const key in allCookies) {
        cookies.remove(key);
      }
      window.location.href = url + '/sign_in';
    } else {
      toast.error(data.msg || '登出失败,请重试');
    }
  };

  const subClick = (item: NavConfigProps) => {
    if (selectedKeys.includes(item.label)) {
      setSelectedKeys(selectedKeys.filter((key) => key !== item.label));
    } else {
      setSelectedKeys([...selectedKeys, item.label]);
    }
  };

  return (
    <div className="ml-auto max-md:flex items-center hidden">
      {userInfo.user && (
        <Avatar onClick={() => handlerClick('user')}>
          <AvatarImage src={basePath + '/avatar.svg'} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          ' w-[50px] h-[50px] text-white text-center relative text-sm cursor-pointer',
          {
            'm-line-active': open,
            'm-line': !open,
          }
        )}
        onClick={() => handlerClick('nav')}
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
          ' fixed top-0 mt-[50px] left-0 w-full h-screen bg-background text-foreground transition-all duration-300',
          {
            'opacity-0 -translate-y-10 -z-[1] invisible': !open,
            'opacity-100 translate-y-0 z-[1002]': open,
          }
        )}
      >
        {type === 'nav' ? (
          <div className="pt-6 px-8 pb-[96px] my-0 mx-auto max-w-[288px]">
            <nav className="flex flex-col gap-5">
              {nav_conig.map((item) => {
                if (item.children) {
                  const enable = selectedKeys.includes(item.label);
                  return (
                    <div
                      key={item.label}
                      className={cn('border-b overflow-hidden', {
                        'h-[48px]': !enable,
                        'h-auto pb-[10px]': enable,
                      })}
                    >
                      <button
                        onClick={() => subClick(item)}
                        className="flex justify-between items-center pt-3 pr-1 pb-[11px] w-full leading-6 text-sm font-medium text-foreground cursor-pointer"
                      >
                        <span>{item.label}</span>
                        {enable ? <X size={14} /> : <Plus size={14} />}
                      </button>
                      <div className="">
                        {item.children.map((item) => {
                          return (
                            <div key={item.label}>
                              <Link
                                href={item.path || '#'}
                                className="block hover:text-[#2468f2] ml-3 leading-8 text-sm font-normal text-foreground"
                              >
                                {item.label}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    href={item.path!}
                    target={item.target || '_self'}
                    className=" py-2 border-b hover:text-[#4780f4] hover:border-[#4780f4] "
                  >
                    <span
                      className={cn('relative', {
                        'm-line-black': item.target === '_blank',
                      })}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
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
        ) : (
          <ul className="flex flex-col list-none pb-[96px]">
            <li className=" relative border-b">
              <Link
                href="#"
                className="text-[#536078] dark:text-foreground whitespace-nowrap overflow-hidden text-ellipsis block py-3 px-4"
              >
                昵称：&emsp;{userInfo.user?.nickName}
              </Link>
            </li>
            <li className=" relative border-b">
              <Link
                href="#"
                className=" whitespace-nowrap overflow-hidden text-ellipsis block py-3 px-4"
              >
                控制台
              </Link>
            </li>
            <li className=" relative border-b">
              <Link
                href="#"
                className=" whitespace-nowrap overflow-hidden text-ellipsis block py-3 px-4"
              >
                账号信息
              </Link>
            </li>
            <li className=" relative border-b">
              <Link
                href="#"
                className=" whitespace-nowrap overflow-hidden text-ellipsis block py-3 px-4"
              >
                工单
              </Link>
            </li>
            <li className=" relative border-b">
              <Link
                href="#"
                onClick={logout}
                className=" whitespace-nowrap overflow-hidden text-ellipsis block py-3 px-4"
              >
                退出
              </Link>
            </li>
            <li className=" relative py-3 px-4">联系客服：xxxx</li>
          </ul>
        )}
      </div>
    </div>
  );
}
