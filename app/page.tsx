import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';


export default function Page() {
  return (
    <main>
      <div>我疯狂偶就我</div>
      <div>sdfgosjf</div>
      <div>bowijwjfejpowfej</div>
      <Image src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      ></Image>
    </main>
  );
}
