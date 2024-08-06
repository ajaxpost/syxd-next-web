import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className=" fixed left-0 top-0 flex flex-col items-start justify-around w-full z-[1001] bg-background px-6 h-[70px] max-md:h-[50px] border-b">
        <nav className="w-full flex items-center flex-1">
          <div className="flex-1 flex">
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
          <div>2</div>
        </nav>
      </header>
      <div className="max-md:h-[50px]"></div>
    </>
  );
}
