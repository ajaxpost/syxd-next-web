export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Home Layout</h1>
      {children}
    </>
  );
}
