import React from 'react';

interface PricingTierProps {
  title: string;
  price: string;
  pricefor: string;
  features: string[];
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, features, pricefor }) => {
  return (
    <div className=' lg:h-[560px] lg:w-80 md:w-full md:h-80  w-72 h-[460px] cursor-pointer rounded-2xl shadow-2xl max-md:border duration-500 hover:scale-105 flex flex-col md:flex-row lg:flex-col'>
      <div className='h-1/2 lg:h-1/2 md:h-full rounded-2xl lg:w-full md:w-1/3 bg-white'>
        <h3 className='p-4 text-center lg:text-2xl text-[#0A49D6] '>{title}</h3>
        <p className='ml-2 mt-10 p-2'>
          <span className='text-2xl font-normal'>Rs. </span>
          <span className=' text-6xl font-normal'>{price}</span> {pricefor}
        </p>
      </div>
      <div className='flex h-1/2 lg:h-1/2 md:h-full rounded-2xl lg:w-full md:w-2/3 bg-[#F2F2F2]'>
        <ul className='lg:mt-2 flex-col justify-around lg:text-lg gap-12 p-4 font-normal md:text-xl md:my-auto'>
          {features.map((feature, index) => (
            <li className='flex gap-4 py-1' key={index}>
              <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='9.5' cy='9.5' r='9.5' fill='#53BB2F' />
                <path
                  d='M4.64557 8.69833L3.39282 10.1789L7.46425 14.2503L15.6071 7.58794L14.3544 6.10742L7.46425 11.6594L4.64557 8.69833Z'
                  fill='white'
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingData: PricingTierProps[] = [
    {
      title: 'Pre-Intelligence Tier',
      price: '499',
      pricefor: '/Student/year',
      features: [
        'Microsoft A1/A3 Licenses',
        'Proprietary Microsoft add-ins',
        'Customizable Education Data Model',
        'Student lifecycle dashboards',
        'OSF network',
      ],
    },
    {
      title: 'Intelligence Tier',
      price: '699',
      pricefor: '/Student/year',
      features: [
        'Intelligence modules for student learning outcome',
        'Intelligent reporting tooling.',
        'Customizable Education Data Model',
        'Workflow Builder',
      ],
    },
    {
      title: 'Enterprise Tier',
      price: 'Custom',
      pricefor: '(contact sales)',
      features: [
        'Everything in Intelligence plus',
        'Enterprise customer support helpdesk',
        'Enterprise module integration',
        'Continuous feedback delivery system.',
      ],
    },
  ];

  return (
    <div className='text-black min-h-screen flex flex-col justify-center'>
      <h1 className='mb-14 lg:mt-0 lg:text-7xl font-medium text-center text-5xl mt-20'>A plan that fits your college needs </h1>
      <div className='my-14 flex lg:flex-row gap-12 lg:gap-2 xl:gap-0 flex-col mx-auto md:mx-0 justify-around px-5'>
        {pricingData.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
