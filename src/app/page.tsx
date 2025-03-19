'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function BfsiHero() {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <Header toggleSidebar={toggleSidebar}/>
    {isSidebarOpen && (
        <div className="sidebar">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        </div>
      )}
      <section className="max-w-[1440px] mx-auto py-10 md:py-[140px] px-4 md:px-[40px] lg:px-[120px] flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:max-w-xl text-center md:text-left flex-shrink-0 mt-8 md:mt-12 lg:py-[48px]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[130%] font-bold text-[#343434] font-spacegrotesk text-left">
            Get Instant Access to Exclusive <span className="text-[#E21221]">Desi Leaked</span> Content</h1>
          <p className="mt-4 text-[14px] sm:text-[16px] font-manrope font-medium text-[#727272] leading-[130%] text-left">
            Dive into the latest, most exclusive Desi Leaked content, ranging from popular TV shows, films, and viral entertainment moments, all with a unique Desi twist. Perfect for entertainment seekers looking for something different and exciting.
          </p>

          {/* Buttons for Desktop */}
          <div className="hidden md:flex mt-6 flex-col sm:flex-row items-center sm:space-x-4">
            <button  className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-red-600 text-white text-[14px] sm:text-[16px] leading-[130%] font-bold font-manrope rounded-lg hover:bg-red-700">
              Watch Upcoming Content
            </button>
            <button  className="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-3 sm:py-4 border border-[#002549] text-[#002549] rounded-lg font-manrope text-[14px] sm:text-[16px] font-semibold leading-[130%] hover:bg-gray-100">
              Discover the Latest Trends
            </button>
          </div>
        </div>

        {/* Image Swiper for Mobile */}
        <div className="block md:hidden w-full mt-8">
          <Swiper
            loop={true}
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <style jsx global>{`
                        .swiper-pagination {
                            position: unset !important;
                        }
                        `}</style>
            <SwiperSlide>
              <div className="relative w-full h-[440px] md:h-[350px] bg-[#DAEDFF] rounded-[12px] shadow-lg overflow-hidden">
                <Image
                  src="/hero1.jpg"  // Local Image
                  alt="Leaked Content"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[440px] md:h-[350px] bg-gray-200 rounded-[12px] shadow-lg overflow-hidden"
                style={{ background: `url('/hero2.jpg') lightgray 50% / cover no-repeat` }}>  {/* Local Image */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[440px] md:h-[350px] bg-gray-200 rounded-[12px] shadow-lg overflow-hidden"
                style={{ background: `url('/hero3.jpg') lightgray 50% / cover no-repeat` }}> {/* Local Image */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Buttons for Mobile (Moved Below Swiper) */}
        <div className="block md:hidden mt-6 flex flex-col sm:flex-row items-center sm:space-x-4 w-full">
          <button  className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-red-600 text-white text-[14px] sm:text-[16px] leading-[130%] font-bold font-manrope rounded-lg hover:bg-red-700">
            Watch Upcoming Content
          </button>
          <button  className="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-3 sm:py-4 border border-[#002549] text-[#002549] rounded-lg font-manrope text-[14px] sm:text-[16px] font-semibold leading-[130%] hover:bg-gray-100">
            Discover the Latest Trends
          </button>
        </div>

        {/* Images Row for Larger Screens */}
        <div className="hidden md:flex flex-wrap md:flex-nowrap gap-4 mt-8 md:mt-0 justify-center">
          {/* First Card */}
          <div className="relative w-[276px] h-[411px] bg-[#DAEDFF] rounded-[12px] shadow-lg overflow-hidden">
            <Image
              src="/hero1.jpg"  // Local Image
              alt="Leaked Content"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Second & Third Images (Stacked on Mobile) */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative w-[138px] h-[411px] bg-gray-200 rounded-[12px] shadow-lg overflow-hidden"
              style={{ background: `url('/hero2.jpg') lightgray 50% / cover no-repeat` }}> {/* Local Image */}
            </div>
            <div className="relative w-[138px] h-[411px] bg-gray-200 rounded-[12px] shadow-lg overflow-hidden"
              style={{ background: `url('/hero3.jpg') lightgray 50% / cover no-repeat` }}> {/* Local Image */}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
