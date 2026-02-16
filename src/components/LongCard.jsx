import React from 'react'

const LongCard = ({mediumText, svg, smallText,degree}) => {
  return (
    <div className='bg-[hsl(243,23%,24%)] rounded-lg mt-5 w-25 h-50 flex flex-col justify-between p-3'>
        <p className='text-md text-center text-[hsl(250,6%,84%)]'>
            {mediumText}
        </p>
        <img src={svg} alt="" />
        <div className='flex justify-between'>
            <p>
                {smallText}
            </p>
            <p>
                {degree}
            </p>
        </div>
    </div>
  )
}

export default LongCard