import React from 'react'
import logo from "../assets/images/logo.svg"
import { Settings, ChevronDown} from "lucide-react"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <img src={logo} alt="" />
        <div className='px-4 py-3 flex flex-row  items-center gap-2 bg-[hsl(243,23%,24%)] rounded-lg'>
            <Settings className='w-3 h-3'/>
            <span  className='text-xs'>Units</span>
            <ChevronDown className='w-3 h-3'/>
        </div>
    </nav>
  )
}

export default Navbar