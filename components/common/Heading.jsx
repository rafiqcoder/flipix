import { cn } from '@/utils/cn'
import React from 'react'

function Heading({children, className}) {
  return (
    <h1 className={cn(' md:text-2xl text-xl lg:text-3xl text-white font-semibold', className)}>
        {children}
    </h1>
  )
}

export default Heading