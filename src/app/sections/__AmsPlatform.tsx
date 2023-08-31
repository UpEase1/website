import React from 'react';

import NextImage from '@/components/NextImage';

import Phone from '../../public/images/laptop.png';

const StudentApp: React.FC = () => {
  return (
    <div className='flex h-[85%] px-4'>
      <div className='h-srceen my-auto flex w-1/2 justify-center'>
        <NextImage
          src={Phone}
          alt='phone display'
          layout='responsive'
          width='800'
          height='300'
        />
      </div>

      <div className='h-full w-1/2 flex-col justify-between px-8 text-white'>
        <div className='flex h-1/2 w-full gap-16 py-4'>
          <div className='flex h-full w-full items-center rounded-3xl border-2 border-gray-500'>
            Your class time-table on the go
          </div>
        </div>
        <div className='flex h-1/2 w-full gap-8 py-4'>
          <div className='w-2/5 rounded-3xl border-2 border-gray-500'>hi</div>
          <div className='w-3/5 rounded-3xl border-2 border-gray-500'>hi</div>
        </div>
      </div>
    </div>
  );
};

export default StudentApp;
