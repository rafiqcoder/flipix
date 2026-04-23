'use client'
import React from 'react'
import { IoMdPersonAdd } from "react-icons/io";

function AddNewAgent() {
  return (
    <div>
        <div className=''>
            <button className=' flex items-center gap-3 text-[15px] font-medium px-2 py-1.5  rounded-md text-white cursor-pointer bg-[#ffffff49]'><IoMdPersonAdd/>Add Agent</button>
        </div>
    </div>
  )
}

export default AddNewAgent