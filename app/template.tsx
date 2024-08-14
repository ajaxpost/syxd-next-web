import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
