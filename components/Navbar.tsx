import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flexBetween z-30 relative py-5 max-container padding-container border-2 border-red-500'>
      <Link href='/'>
      <Image src="file.svg" alt="Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
