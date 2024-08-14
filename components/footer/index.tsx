import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-[60px] min-h-[350px]">
      <div className="s-w px-4 max-md:px-8 relative ">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex-1 flex items-center gap-5">
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
            <span>© 2024 盛易信达</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
