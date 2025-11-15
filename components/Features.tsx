import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className='flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end'>
        <div className='flex flex-1 lg-min-h-[900px]'>
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-15 md:-left-16 lg:flex  3xl:left-20'
          />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
              className='absolute left-[-5px] -top-7 w-10 lg:w-[50px]'
            />
            <h2 className='text-[40px] font-bold leading-[120%] lg:text-[64px] lg:gap-20'>
              Our Features
            </h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20'>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
        <Image src={icon} alt='map' width={28} height={28} />
      </div>
      <h2 className='text-[20px] font-bold leading-[120%] lg:text-[52px] capitalize mt-5'>
        {title}
      </h2>
      <p className='text-[16px] font-normal mt-5 bg-white/80 text-gray-30 lg:mt-5 lg:bg-none'>{description}</p>
    </li>
  );
};

export default Features;
