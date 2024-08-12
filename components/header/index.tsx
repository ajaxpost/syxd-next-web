import Link from 'next/link';
import { ModeToggle } from '../theme/mode-toggle';
import MLine from './m-line';

export default function Header() {
  return (
    <>
      <header className=" fixed left-0 top-0 flex flex-col items-start justify-around w-full z-[1001] bg-background px-6 h-[70px] max-md:h-[50px] border-b">
        <nav className="w-full flex items-center flex-1">
          <div className=" flex">
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
          </div>
          <div className="ml-auto mr-6 max-md:hidden">
            <Link
              href="http://101.201.63.227:8082/sign_in"
              className=" hover:underline mr-5"
              target="_blank"
            >
              登录
            </Link>
            <Link
              href="http://101.201.63.227:8082/"
              className="hover:underline"
              target="_blank"
            >
              控制台
            </Link>
          </div>
          <ModeToggle className="max-md:hidden" />
          <MLine />
        </nav>
      </header>
      <div className="max-md:h-[50px]"></div>
    </>
  );
}
