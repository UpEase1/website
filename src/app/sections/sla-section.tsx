import Image from 'next/image'
import React from 'react'

import '@/styles/sla-section.css'

export default function Test() {
  return (
    <div className="gridcontainer h-screen px-8 py-24">
      <div className="main1 relative">
        <Image
          src="/images/phone.png" // Replace with your image path
          alt="Description of Image"
          layout="fill"
          objectFit="contain" // Ensures image scales correctly and doesn't overflow
          className="absolute inset-0"
        />
      </div>
      <div className="main2">
        <div className="sec1">
          <div className="sub1 flex px-4 justify-center items-center  text-white">
            Your something something on something something.
          </div>
          <div className="sub2 relative">
            <Image
              src="/images/timetable.png"  // Replace with your image path
              alt="Description of Image"
              layout="fill"
              objectFit="contain"  // Ensures image scales correctly and doesn't overflow
              className="absolute inset-0"
            />
          </div>
        </div>
        <div className="sec2">
          <div className="sub3"></div>
          <div className="sub4"></div>
        </div>
        <div className="sec3"></div>
        <div className="sec4"></div>
      </div>
    </div>
  )
}