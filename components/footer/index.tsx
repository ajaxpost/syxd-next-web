import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FootNavConfig } from './config';

export default function Footer() {
  return (
    <footer className="max-md:py-[10px] py-[40px] min-h-[350px]">
      <div className="flex relative px-6 max-md:hidden">
        {/* logo */}
        <div className=" basis-[340px] flex-shrink-0">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="logo"
              quality={100}
              width={300}
              height={44}
              className="dark:hidden"
            />
            <Image
              src="/logo2.png"
              alt="logo"
              quality={100}
              width={300}
              height={44}
              className="dark:inline-block hidden max-w-[150px]"
            />
          </Link>
          <div className="mt-5 ml-[50%] -translate-x-1/2">
            <h2 className="text-base font-medium  leading-[22px] text-muted-foreground mb-5">
              关注我们
            </h2>

            <Image
              src="/ewm1.png"
              alt="公众号二维码"
              width={109}
              height={109}
            />
          </div>
        </div>
        <div className="flex flex-1">
          {FootNavConfig.map((item) => {
            return (
              <div key={item.title} className="flex-1">
                <h2 className="text-base font-medium leading-[22px] mb-[10px]">
                  {item.title}
                </h2>
                <ul>
                  {item.children?.map((item) => {
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.path || '#'}
                          target={item.target || '_self'}
                          className="py-2 inline-block text-muted-foreground text-sm font-medium leading-[22px]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className=" flex-1">
            <h2 className="text-base font-medium leading-[22px] mb-[10px]">
              联系
            </h2>
            <ul>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  售前咨询
                </div>
                <div className="text-sm flex items-center text-[#2c4ddc] font-medium leading-[22px]">
                  <Phone size={18} className="mr-2" />
                  400-xxx-xxx 转1
                </div>
              </li>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  售后咨询
                </div>
                <div className="text-sm flex items-center text-[#2c4ddc] font-medium leading-[22px]">
                  <Phone size={18} className="mr-2" />
                  400-xxx-xxx 转1
                </div>
              </li>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  市场合作
                </div>
                <div className="text-sm flex items-center text-muted-foreground font-medium leading-[22px]">
                  13171754473@163.com
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full px-8 max-md:block hidden"
      >
        {FootNavConfig.map((item) => {
          return (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {item.children?.map((item) => {
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.path || '#'}
                          target={item.target || '_self'}
                          className="py-2 block text-muted-foreground text-sm font-medium leading-[22px]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
        <AccordionItem value="联系">
          <AccordionTrigger>联系</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  售前咨询
                </div>
                <div className="text-sm flex items-center text-[#2c4ddc] font-medium leading-[22px]">
                  <Phone size={18} className="mr-2" />
                  <Link href="tel:400-xxx-xxx">400-xxx-xxx 转1</Link>
                </div>
              </li>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  售后咨询
                </div>
                <div className="text-sm flex items-center text-[#2c4ddc] font-medium leading-[22px]">
                  <Phone size={18} className="mr-2" />
                  <Link href="tel:123123">400-xxx-xxx 转1</Link>
                </div>
              </li>
              <li className="py-2">
                <div className="text-sm mb-2 text-foreground font-medium leading-[22px]">
                  市场合作
                </div>
                <div className="text-sm flex items-center text-muted-foreground font-medium leading-[22px]">
                  13171754473@163.com
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="text-center pt-5 text-muted-foreground font-medium">
        盛易信达 © 2024 北京盛易信达科技有限公司
      </div>
    </footer>
  );
}
