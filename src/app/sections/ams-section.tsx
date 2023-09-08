import Image from 'next/image'
import React from 'react'

import styles from '@/styles/ams-section.module.css'

import { cn } from '@/lib/utils'

import NavbarBlack from '@/components/Navbarblack'
export default function StudentApp() {

  return (
    <div>
      <NavbarBlack />
      <div className={styles.gridmain}>
        <div className={cn(styles.gridmobile, " relative")}>
          <Image
            src="/images/ams.png"
            alt="Description of Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain" // Ensures image scales correctly and doesn't overflow
            quality={90}
            priority={true}
          />
        </div>
        <div className={styles.gridsub}>
          <div className={cn(styles.gridone, "flex flex-col rounded-3xl border-2 border-gray-500")}>
            <div className='grid-one-sub1 relative flex-1'>
              <Image
                src="/images/ams1-desktop.svg"
                alt="Description of Image"
                fill
                objectFit="contain"  // Ensures image scales correctly and doesn't overflow
                className="absolute inset-0 px-2 pt-6"
              />
            </div>
            <div className="grid-one-sub2 px-6 py-2 lg:py-6 text-2xl text-white flex justify-center items-center">
              Intuitive interface to create institute relationships.
            </div>
          </div>
          <div className={cn(styles.gridtwo, "flex flex-col rounded-3xl border-2 border-gray-500")}>
            <div className='relative flex-1'>
              <Image
                src="/images/microsoft.svg"
                alt="Description of Image"
                fill
                objectFit="contain"  // Ensures image scales correctly and doesn't overflow
                className="absolute inset-0 px-2 max-sm:pt-2"
              />
            </div>
            <div className="grid-two-sub1 px-6 py-2 lg:py-6 text-2xl text-white flex justify-center items-center">
              Customize education data model.
            </div>
          </div>
          <div className={cn(styles.gridthree, "flex flex-col rounded-3xl border-2 border-gray-500")}>
            <div className='relative flex-1'>
              <Image
                src="/images/security.svg"
                alt="Description of Image"
                fill
                objectFit="contain"  // Ensures image scales correctly and doesn't overflow
                className="absolute inset-0 px-2 max-sm:pt-2"
              />
            </div>
            <div className="grid-two-sub1 px-6 py-2 lg:py-6 text-2xl text-white flex justify-center items-center">
              Secure data with federated credentials and least access
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}