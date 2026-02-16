import React from 'react'

const Card = ({smallText,bigText}) => {
  return (
    <div className='bg-[hsl(243,23%,24%)] rounded-lg mt-5 w-50 h-25 flex flex-col justify-between p-3'>
            <p className='text-xs text-[hsl(250,6%,84%)]'>
                {smallText}
            </p>
            <p className=' font-light text-3xl '>
                {bigText}
            </p>
        
    </div>
  )
}

export default Card