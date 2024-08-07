'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Event_Link from '@/components/event_link';
export default function Eventos(){
    return(
        <>
          <div className="w-full h-[45vw] max-lg:h-[55vw] max-sm:h-[150vw] bgbluegradient flex max-sm:flex-col">
                <div className="h-full w-[35%] max-sm:w-full flex flex-col gap-[0.7vw] max-sm:h-[20%] px-[7vw] pt-[7vw] max-sm:pt-[0vw] max-sm:justify-center">
                  <h1 className="font-extrabold text-white text-[5vw] max-lg:text-[5.5vw] max-sm:text-[8.8vw]">Próximos Eventos</h1>
                  <span className="text-white text-[1.2vw] max-lg:text-[2vw] max-sm:text-[3.5vw]">Eventos que chegaram brevimente na nossa comunidade</span>
                </div>
                <div className="h-full w-[65%] max-sm:w-full max-sm:h-[80%] flex items-center">
                  <div className='w-full h-[30vw] max-lg:h-[40vw] max-sm:h-[90%]'>
                    <Swiper
                      slidesPerView={1.4}
                      spaceBetween={30}
                      pagination={{clickable: true,}}
                      // modules={[Pagination]}
                      loop={true}
                      className="w-full h-full"
                    >
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                    </Swiper> 
                  </div>
                </div>
          </div>
          <div className="w-full h-[45vw] max-lg:h-[55vw] max-sm:h-[150vw] flex max-sm:flex-col">
                <div className="h-full w-[35%] max-sm:w-full flex flex-col gap-[0.7vw] max-sm:h-[20%] px-[7vw] pt-[7vw] max-sm:pt-[0vw] max-sm:justify-center">
                  <h1 className="font-extrabold text-blue-700 text-[5vw] max-lg:text-[5.5vw] max-sm:text-[8.8vw]">Eventos Recentes</h1>
                  <span className="text-blue-700 text-[1.2vw] max-lg:text-[2vw] max-sm:text-[3.5vw]">Aqui você encontra evento que voram lançados recentimente.</span>
                </div>
                <div className="h-full w-[65%] max-sm:w-full max-sm:h-[80%] flex items-center">
                  <div className='w-full h-[30vw] max-lg:h-[40vw] max-sm:h-[90%]'>
                    <Swiper
                      slidesPerView={1.4}
                      spaceBetween={30}
                      pagination={{clickable: true,}}
                      // modules={[Pagination]}
                      loop={true}
                      className="w-full h-full"
                    >
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                      <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                    </Swiper> 
                  </div>
                </div>
          </div>

          <div className='w-full h-fit p-[7vw] flex flex-col gap-[2vw]'>
            <div>
              <h1 className="font-extrabold text-blue-700 text-[5vw] max-lg:text-[5.5vw] max-sm:text-[8vw]">Todos <br /> Eventos</h1>
              <span className="text-gray-700 text-[1.2vw] max-lg:text-[2vw] max-sm:text-[3.5vw]">Aqui você encontra evento que voram lançados.</span>
            </div>
            <div className='w-full h-[20vw] max-lg:h-[30vw] max-sm:h-[90%]'>
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{clickable: true,}}
                 // modules={[Pagination]}
                loop={true}
                className="w-full h-full"
                >
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                </Swiper> 
            </div>
            <div className='w-full h-[20vw] max-lg:h-[30vw] max-sm:h-[90%]'>
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{clickable: true,}}
                 // modules={[Pagination]}
                loop={true}
                className="w-full h-full"
                >
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='Eat Sleep Repeat' bg='url(/bg2.svg)' date='05/07/2024' descrition='Eat Sleep Repeat um evento' time='2/5 AM'/></SwiperSlide>
                  <SwiperSlide><Event_Link name='next level week' bg='url(/bg3.svg)' date='05/07/20242/5 AM' descrition='next level week um evento' time='2/5 AM'/></SwiperSlide>
                </Swiper> 
            </div>
          </div>
        </>
    );
}