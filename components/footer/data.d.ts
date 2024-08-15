import { LinkProps } from 'next/link';

export interface FootNavConfigProps {
  title: string;
  path?: string;
  target?: string;
  children?: FootNavConfigProps[];
}
