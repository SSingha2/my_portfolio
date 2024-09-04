import React from 'react'
import Title from './Title'
import { MovingBorderBtn } from '@/components/ui/MovingBorder'
import Link from 'next/link'

export default function Languages() {
  return (
    <div>
      <Title text="Languages Known" className='flex flex-col items-center justify-center rotate-6 pt-10'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 m-20'>
        <MovingBorderBtn className='p-10 text-xl font-bold italic'>English</MovingBorderBtn>
        <MovingBorderBtn className='p-10 text-xl font-bold italic'><Link href={"https://drive.google.com/file/d/12BF52dy2Kp4SnfUPdLxV6A51HOwjGATg/view?usp=sharing"} target="_blank">Japanese (JLPT N2)</Link></MovingBorderBtn>
      </div>
    </div>
  )
}
