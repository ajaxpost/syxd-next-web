'use client';
import { userInfoProps } from './data';
import Link from 'next/link';
import { BookText, UserRound } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import cookies from 'js-cookie';
import { toast } from 'sonner';

const url = process.env.NEXT_PUBLIC_CONSOLE_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export default function UserInfo({ userInfo }: { userInfo: userInfoProps }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {userInfo.user ? (
        <div
          className="flex items-center gap-2 relative h-full"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Avatar>
            <AvatarImage src={basePath + '/avatar.svg'} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {userInfo.user.userName}
            </span>
            <span className="text-sm font-medium text-foreground">
              {userInfo.user.nickName}
            </span>
          </div>
          <div
            className={cn(
              'shadow-sm border absolute transition-opacity right-0 bg-background top-full min-w-[140px] w-[220px]',
              {
                'invisible z-0 opacity-0 ': !open,
                'z-[1002] opacity-100 ': open,
              }
            )}
          >
            <div className=" overflow-hidden ">
              <h2 className="text-base font-medium text-foreground border-b px-6 py-2 mb-5">
                {userInfo.user.nickName}
              </h2>
              <nav className="flex flex-col gap-5 mb-5">
                <Link
                  href="#"
                  className=" px-6 cursor-pointer hover:text-[#2468f2] text-base leading-[22px] font-medium flex items-center gap-1"
                >
                  <UserRound size={18} />
                  账号信息
                </Link>
                <Link
                  href="#"
                  className=" px-6 cursor-pointer hover:text-[#2468f2] text-base leading-[22px] font-medium flex items-center gap-1"
                >
                  <BookText size={18} />
                  工单
                </Link>
              </nav>
            </div>
            <div
              onClick={logout}
              className="text-base cursor-pointer hover:text-[#2468f2]  leading-[42px] text-foreground border-t px-6"
            >
              <span className="leading-[22px] ">退出</span>
            </div>
          </div>
        </div>
      ) : (
        <Link href={url + '/sign_in'} className=" hover:underline">
          登录
        </Link>
      )}
    </>
  );
}
