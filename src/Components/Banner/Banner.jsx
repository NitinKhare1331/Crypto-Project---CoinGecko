import React from 'react';
import BannerImage from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className='w-full h-[25rem] relative'>
        <img
            src={BannerImage}
            className='h-full w-full'
        />

        <div className='absolute top-20 left-0 right-0 mx-auto w-[20rem]'>
            <div className='flex flex-col gap-4'>
                <div className='font-semibold text-5xl text-white'>
                    Crytpo Tracker
                </div>

                <div className='font-semibold text-sm text-white text-center'>
                    Get all data regarding crypto currencies
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner