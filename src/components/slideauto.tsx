'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function SlideAuto(){
  return(
    <div className='w-full h-fit py-[5vw] bg-white'>
      <div className='ml-[7vw] mb-[3vw]'>
        <h1 className="font-extrabold text-blue-700 text-[4vw] max-lg:text-[6vw] max-sm:text-[7vw] m-0 p-0">Eventos</h1>
        <span className="text-gray-700 text-[1.2vw] max-lg:text-[2.2vw] max-sm:text-[3.2vw]">Nossos eventos em destaque</span>
      </div>
      <Swiper pagination={true} loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image className='w-full object-cover' width={1000} height={700} src={"/imgevent.svg"} alt="Image 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full object-cover' width={1000} height={700} src={"/imgevent.svg"} alt="Image 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full object-cover' width={1000} height={700} src={"/imgevent.svg"} alt="Image 1"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}