'use client';
import Link from 'next/link';
import { navMenu } from './config';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="ml-7 flex gap-5 h-full">
      {navMenu.map((item) => {
        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              'hover:text-[#2468f2]  max-md:leading-[50px] leading-[70px]',
              {
                'nav-menu-item after:bg-foreground': pathname === item.path,
              }
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
