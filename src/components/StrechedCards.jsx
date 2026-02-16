import React from 'react'

const StrechedCards = ({svg,text, degree}) => {
  return (
    <div className='flex justify-between items-center  bg-[hsl(243,23%,30%)] rounded-lg  w-full  h-14 p-2 '>
        <div className=' flex  items-center justify-start '>
            <img src={svg} alt="" className='w-8 h-8' />
            <p>
                {text}
            </p>
        </div>
        <p>
            {degree}
        </p>

    </div>
  )
}

export default StrechedCards