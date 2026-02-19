import React from 'react'
import { useState } from 'react'
import { Search ,ChevronDown} from 'lucide-react'
//import frame from '../assets/images/bg-today-large.svg'
import Card from './Card'
import LongCard from './LongCard'
import rainCloud from '../assets/images/icon-rain.webp'
import StrechedCards from './StrechedCards'
// import { hourlyForecast } from '../data/hourforecast'
import sunny from '../assets/images/icon-sunny.webp'
import { searchCity,getWeather } from '../services/weather'

const Hero = () => {
    const [weather, setWeather] = useState(null);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
    if (!search.trim()) return

    try {
      setLoading(true)
      setError(null)

      const city = await searchCity(search)
      if (!city) {
        setError("City not found")
        return
      }

      const data = await getWeather(city.latitude, city.longitude)

      setLocation(city)
      setWeather(data)
      //setSelectedDay(data.daily.time[0]) // default to today

    } catch (err) {
      setError(`Failed to fetch weather data: ${err}`)
    } finally {
      setLoading(false)
    }
  }

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
                        value = {search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className='  pl-10 pr-6 h-12 w-full rounded-lg  bg-[hsl(243,23%,24%)]  placeholder:text-gray-400 focus:outline-none'
                    />
                    <Search className='absolute  left-3 top-1/2 -translate-y-1/2'/>
                </div>
                <button 
                className='rounded-lg px-6 py-3 bg-blue-700'
                 onClick={handleSearch}
                disabled={loading}>
                    Search
                </button>
            </div>

                    {error && (
                <p className="mt-3 text-red-400 text-sm">
                    {error}
                </p>
                )}
           
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-[2fr_1fr] w-full flex-1 mt-10  gap-6'>
            {/* My left grid*/}
            <div className='flex flex-col w-full   '>
                <div className='bg-[url("/bg-today-large.svg")] flex justify-between items-center p-5  rounded-lg bg-cover bg-center h-[50%]'>
                     <div >
                            <h1 className='font-bold text-2xl'>
                               {location ? `${location.name}, ${location.country}` : "Search a city"}
                                {/* Berlin,Germany */}
                            </h1>
                            <p className='text-xs'>
                                {/* Tuesday, Aug 5,2025 */}
                                 {weather ? new Date(weather.current.time).toDateString() : "--"}
                            </p>
                     </div>
                     <div className='flex gap-6 items-center justify-center'>
                            <img src={sunny} alt="" className='w-20 h-20' />
                            <h1 className='text-7xl font-bold'>
                                {/* 20° */}
                                 {weather ? `${Math.round(weather.current.temperature_2m)}°` : "--"}
                            </h1>
                     </div>
                </div>
                <div className='flex  flex-wrap md:flex-nowrap justify-between gap-2'>
                    <Card 
                    smallText="Feels Like"
                    bigText={weather ? `${Math.round(weather.current.temperature_2m)}°` : "--"}>

                    </Card>
                    <Card 
                    smallText="Humidity"
                    bigText={weather ? `${weather.current.relative_humidity_2m}%` : "--"}>

                    </Card>

                    <Card 
                    smallText="Wind"
                    bigText={weather ? `${weather.current.wind_speed_10m} km/h` : "--"}>

                    </Card>

                    <Card 
                    smallText="Precipitation"
                    bigText={weather ? `${weather.current.precipitation} mm` : "--"}>

                    </Card>

                </div>
                <p className='mt-3'>
                    Daily forecast
                </p>
                <div className='flex  flex-wrap md:flex-nowrap justify-between'>

                    {weather?.daily?.time?.map((day, i) => (
              <LongCard
                key={day}
                mediumText={new Date(day).toLocaleDateString("en-US", { weekday: "short" })}
                svg={rainCloud}
                smallText={`${Math.round(weather.daily.temperature_2m_max[i])}°`}
                degree={`${Math.round(weather.daily.temperature_2m_min[i])}°`}
              />
            ))}
                    {/* <LongCard
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
                    /> */}
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
                    {weather?.hourly?.time?.slice(0, 8).map((time, i) => (
                    <StrechedCards
                        key={time}
                        svg={sunny}
                        text={new Date(time).toLocaleTimeString([], { hour: "numeric" })}
                        degree={`${Math.round(weather.hourly.temperature_2m[i])}°`}
                    />
                    ))}

                    
                    {/* <StrechedCards
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
                    degree="20°"/> */}

                   
                </div>
            </div>
        </div>

    </section>
    
  )
}

export default Hero