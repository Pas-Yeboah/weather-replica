import React from 'react'
import { Search } from 'lucide-react'
import frame from '../assets/images/bg-today-large.svg'
import Card from './Card'

const Hero = () => {
  return (
    <section className='flex flex-col min-h-screen'>
        <div className='flex  flex-col justify-center items-center'>
            <h2 className='text-5xl  py-10'>
            How's the sky looking today?
            </h2>

           <div className='flex flex-row justify-center items-center gap-3 w-full'>
                <div className='relative w-full max-w-md  '>
                
                    <input 
                        type="search"
                        placeholder='Search for a place...'
                        className='  pl-10 pr-6 h-12 w-full rounded-lg  bg-[hsl(243,23%,24%)]  placeholder:text-gray-400 focus:outline-none'
                    />
                    <Search className='absolute  left-3 top-1/2 -translate-y-1/2'/>
                </div>
                <button className='rounded-lg px-6 py-3 bg-blue-700  '>
                    Search
                </button>
            </div>
           
        </div>
        <div className='grid grid-cols-[2fr_1fr] w-full flex-1 mt-10  gap-6'>
            {/* My left grid*/}
            <div className='flex flex-col rounded-lg w-full '>
                <img src={frame} alt="" />
                <div className='flex justify-between'>
                    <Card 
                    smallText="Feels Like"
                    bigText="18°">

                    </Card>
                    <Card 
                    smallText="Humidity"
                    bigText="46%">

                    </Card>

                    <Card 
                    smallText="Wind"
                    bigText="14 km/h">

                    </Card>

                    <Card 
                    smallText="Precipitation"
                    bigText="0 mm">

                    </Card>

                </div>

            </div>

            {/* My right grid*/}
            <div className='bg-[hsl(243,23%,24%)] rounded-lg w-full'>

            </div>
        </div>

    </section>
    
  )
}

export default Hero