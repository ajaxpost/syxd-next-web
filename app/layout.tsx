import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | 盛易信达',
    default: '盛易信达',
  },
  description:
    '国内深耕行业的“智能触达”解决方案提供商，专注于toB、toG领域，拥有自主研发的核心AI知识产权，并具备增值电信业务经营许可资质，具有AI落地所必需的稳定通讯资源，集“AI+通讯”能力于一身。',
  keywords:
    '盛易信达,APM,微呼科技,语音机器人,智能语音,AI,TTS,NLS,NLP,NLU,ASR,IVR,客服机器人,智能客服,标即宝,号码标记,码号标记,企业品牌号,95服务号,特服号,语音短信,语音通知,短信服务,闪信,数字短信,富媒体短信,隐私中间号,音色,语音合成,自然语义,睿思,灵伴,小蜜薯,语音助手,增值电信业务,云呼叫中心,短信,视频彩信,语音识别,95码号,95,1069,106,呼叫中心,Callcenter',
  metadataBase: new URL('https://syxd.com'), // TODO
  openGraph: {
    title: {
      template: '%s | 盛易信达',
      default: '盛易信达',
    },
    description:
      '国内深耕行业的“智能触达”解决方案提供商，专注于toB、toG领域，拥有自主研发的核心AI知识产权，并具备增值电信业务经营许可资质，具有AI落地所必需的稳定通讯资源，集“AI+通讯”能力于一身。',
    siteName: '盛易信达',
    locale: 'zh_CN',
    type: 'website',
    url: '.',
  },
  // @TODO 搜索引擎收录, 请根据实际情况修改
  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     'baidu-site-verification': '@TODO',
  //   },
  // },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#alternates
  alternates: {
    canonical: '.',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        // antialiased 使得字体在支持 WebKit 的浏览器中显示得更加平滑。
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
