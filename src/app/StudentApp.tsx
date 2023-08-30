import React from 'react';

import NextImage from '@/components/NextImage';

import Phone from '../../public/images/Phonenobg.png';
import timetable from '../../public/images/timetable.png';

const StudentApp: React.FC = () => {
  return (
    <div className='flex h-[85%] px-4'>
      <div className='h-srceen my-auto flex w-1/3 justify-center'>
        <NextImage
          src={Phone}
          alt='phone display'
          layout='responsive'
          width='400'
          height='300'
        />
      </div>

      <div className='h-full w-2/3 flex-col justify-between px-8 text-white'>
        <div className='flex h-1/2 w-full gap-16 py-4'>
          <div className='flex h-full w-3/5 items-center rounded-3xl border-2 border-gray-500'>
            <div className='my-auto w-1/2 text-center text-3xl'>
              Your class time-table on the go
            </div>
            <div className='flex h-full w-1/2'>
              <NextImage
                src={timetable}
                alt='timetable'
                layout='responsive'
                width={250}
                height={100}
                className='my-auto'
              />
            </div>
          </div>
          <div className='w-2/5 rounded-3xl border-2 border-gray-500'>hi</div>
        </div>
        <div className='flex h-1/2 w-full gap-16 py-4'>
          <div className='w-1/4 rounded-3xl border-2 border-gray-500'>hi</div>
          <div className='w-3/4 rounded-3xl border-2 border-gray-500'>hi</div>
        </div>
      </div>
    </div>
  );
};

export default StudentApp;
