'use server';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { ModeToggle } from '../theme/mode-toggle';
import MLine from './m-line';
import Nav from './nav';
import Image from 'next/image';
import { userInfoProps } from './data';
import UserInfo from './user-info';
import './header.css';

const url = process.env.NEXT_PUBLIC_CONSOLE_URL;
const baseUrl = process.env.NEXT_PUBLIC_REQUEST_URL;
export default async function Header() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const result = await fetch(baseUrl + '/bg-ry/getInfo', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
    cache: 'no-cache',
  });
  const userInfo: userInfoProps = await result.json();

  return (
    <>
      <header
        className=" fixed left-0 top-0 flex flex-col items-start justify-around w-full z-[1001] bg-background px-6 h-[70px] max-md:h-[50px] border-b"
        style={{
          boxShadow: '0 2px 10px 0 rgba(0,0,0,.06)',
        }}
      >
        <nav className="w-full flex items-center flex-1">
          <div className=" flex items-center h-full">
            <Link href="/" className="h-full flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                quality={100}
                width={300}
                height={44}
                className="max-md:w-[150px]"
              />
            </Link>
            {/* nav menu */}
            <Nav />
          </div>
          <div className="ml-auto h-full mr-6 max-md:hidden flex items-center gap-5">
            {userInfo.user && (
              <Link href={url + '/'} className="hover:underline">
                控制台
              </Link>
            )}
            <UserInfo userInfo={userInfo} />
          </div>
          <ModeToggle className="max-md:hidden" />
          <div className=" ml-auto items-center max-md:flex hidden "></div>
          <MLine userInfo={userInfo} />
        </nav>
      </header>
      <div className="max-md:h-[50px]"></div>
    </>
  );
}
