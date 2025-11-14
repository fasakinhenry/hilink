import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flexBetween z-30 relative max-container padding-container flex border-2 border-red-500'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='Logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <button>Click me</button>
      </div>
    </nav>
  );
};

export default Navbar;
