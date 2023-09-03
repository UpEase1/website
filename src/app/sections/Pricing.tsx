import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className='text-black '>
      <h1 className='mt-20 text-center'>Plan that fits your college needs </h1>
      <div className='flex justify-around px-20 py-20'>
        <div>
          <div className='bg-white'>
            <h3 className='text-[#0A49D6]'>Pre-Intelligence Tier</h3>
            <p>
              Rs. <span className='text-7xl'>499</span> /Student/year
            </p>
          </div>
          <div>
            <ul className='mx-auto flex-col '>
              <li className='flex'>
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
                Microsoft A1/A3 Licenses
              </li>
              <li> Proprietary Microsoft add-ins</li>
              <li> Customizable Education Data Model</li>
              <li> Student lifecycle dashboards </li>
              <li> OSF network</li>
            </ul>
          </div>
        </div>

        <div>
          <div className='bg-white'>
            <h3 className='text-[#0A49D6]'>Pre-Intelligence Tier</h3>
            <p>
              Rs. <span className='text-7xl'>499</span> /Student/year
            </p>
          </div>
          <div>
            <ul>
              <li>Microsoft A1/A3 Licenses</li>
              <li>Proprietary Microsoft add-ins</li>
              <li>Customizable Education Data Model</li>
              <li>Student lifecycle dashboards </li>
              <li>OSF network</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='bg-white'>
            <h3 className='text-[#0A49D6]'>Pre-Intelligence Tier</h3>
            <p>
              Rs. <span className='text-7xl'>499</span> /Student/year
            </p>
          </div>
          <div>
            <ul>
              <li>Microsoft A1/A3 Licenses</li>
              <li>Proprietary Microsoft add-ins</li>
              <li>Customizable Education Data Model</li>
              <li>Student lifecycle dashboards </li>
              <li>OSF network</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
