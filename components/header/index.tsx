'use server';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { ModeToggle } from '../theme/mode-toggle';
import MLine from './m-line';
import Nav from './nav';
import './header.css';
import { userInfoProps } from './data';
import UserInfo from './user-info';

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
      <header className=" fixed left-0 top-0 flex flex-col items-start justify-around w-full z-[1001] bg-background px-6 h-[70px] max-md:h-[50px] border-b">
        <nav className="w-full flex items-center flex-1">
          <div className=" flex items-center h-full">
            <Link href="/" className="flex-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m14.31 8 5.74 9.94" />
                <path d="M9.69 8h11.48" />
                <path d="m7.38 12 5.74-9.94" />
                <path d="M9.69 16 3.95 6.06" />
                <path d="M14.31 16H2.83" />
                <path d="m16.62 12-5.74 9.94" />
              </svg>
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
