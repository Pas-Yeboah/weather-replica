import React from 'react'
import { Search ,ChevronDown} from 'lucide-react'
//import frame from '../assets/images/bg-today-large.svg'
import Card from './Card'
import LongCard from './LongCard'
import rainCloud from '../assets/images/icon-rain.webp'
import StrechedCards from './StrechedCards'
// import { hourlyForecast } from '../data/hourforecast'
import sunny from '../assets/images/icon-sunny.webp'

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
            <div className='flex flex-col w-full   '>
                <div className='bg-[url("/bg-today-large.svg")] flex justify-between items-center p-5  rounded-lg bg-cover bg-center h-[50%]'>
                     <div >
                            <h1 className='font-bold text-2xl'>
                                Berlin,Germany
                            </h1>
                            <p className='text-xs'>
                                Tuesday, Aug 5,2025
                            </p>
                     </div>
                     <div className='flex gap-6 items-center justify-center'>
                            <img src={sunny} alt="" className='w-20 h-20' />
                            <h1 className='text-7xl font-bold'>
                                20°
                            </h1>
                     </div>
                </div>
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
                <p className='mt-3'>
                    Daily forecast
                </p>
                <div className='flex justify-between'>
                    <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />

                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                     <LongCard
                    mediumText="Tue"
                    svg={rainCloud}
                    smallText="20°"
                    degree="14°"
                    />
                </div>

            </div>


            {/* My right grid */}
            <div className='flex flex-col bg-[hsl(243,23%,24%)] p-3 rounded-lg w-full'>
                <div className='p-3 flex justify-between items-center'>
                    <p>
                        Hourly forecast
                    </p>
                    <div className='px-4 py-3 flex flex-row  items-center gap-2 bg-[hsl(243,23%,30%)] rounded-lg'>
                        
                        <span  className='text-sm'>Tuesday</span>
                        <ChevronDown className='w-3 h-3'/>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 p-2'>

                    {/* {
                        hourlyForecast.map((items)=>(
                            <>
                            <StrechedCards svg={items.svg}
                            text={items.text}
                            degree={items.degree}/>
                            </>
                        ))
                    } */}
                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                    <StrechedCards
                    svg={sunny}
                    text="3 PM"
                    degree="20°"/>

                   
                </div>
            </div>
        </div>

    </section>
    
  )
}

export default Hero