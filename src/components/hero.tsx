import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className='py-16'>
      <div className='w-16 h-16 bg-[#ee817d] rounded-full flex items-center justify-center mx-auto mb-6'>
        <Heart className="w-8 h-8 text-white" />
      </div>
      <div className='text-center text-4xl md:text-5xl font-bold mb-4'>图片收藏</div>
    </div>
  )
}

export default React.memo(Hero);