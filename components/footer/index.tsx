import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-[60px]">
      <div className="s-w px-4 max-md:px-8 relative ">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex-1 flex items-center gap-5">
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
            <span>© 2024 盛易信达</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
