import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween z-30 relative max-container padding-container py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='Logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter'>
        <Button
        type="button"
        title="Login"
        icon="/user.svg"
        variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
