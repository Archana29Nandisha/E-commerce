import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const Ads = () => {
  return (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay ]}
            className=' rounded-lg overflow-hidden'
            
          >
            <SwiperSlide>
                <img
                src='https://tse2.mm.bing.net/th?id=OIP.H1aIf_7N4lcHtpkEbisYiQHaFy&pid=Api&P=0&h=180.jpg'
                alt='ad'
                className=' w-full object-contain rounded-lg'
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src='https://tse3.mm.bing.net/th?id=OIP.QbZkxu4Wo0HTLv22SnBrNwHaFj&pid=Api&P=0&h=180.jpg'
                alt='ad'
                className=' w-full object-contain rounded-lg'
                />
            </SwiperSlide>
            
          </Swiper>
  );
};

export default Ads ;