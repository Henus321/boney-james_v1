import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import './slider.scss';

interface SliderProps {
  photoUrls: string[];
}

const Slider: React.FC<SliderProps> = ({ photoUrls }) => {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
    >
      {photoUrls.map((photo, index) => (
        <SwiperSlide key={uuidv4()}>
          <img className="slider__image" src={photo} alt={`Coat ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
