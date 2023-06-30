import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const adsElement = [
    {
        imageUrl:"https://tse2.mm.bing.net/th?id=OIP.H1aIf_7N4lcHtpkEbisYiQHaFy&pid=Api&P=0&h=180.jpg "
    },
    {
        imageUrl:"https://tse3.mm.bing.net/th?id=OIP.QbZkxu4Wo0HTLv22SnBrNwHaFj&pid=Api&P=0&h=180.jpg "
    },
    {
        imageUrl:" "
    },
    {
        imageUrl:" "
    },
    {
        imageUrl:" "
    },
]

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
            {adsElement.map(({ imageUrl} , index) =>(
                <SwiperSlide key={index}>
                    <AdUnit imageUrl={ imageUrl} id={index}/>
                </SwiperSlide>
            ))}
            
          </Swiper>
  );
};

export default Ads ;
const AdUnit = ({ imageUrl, id }) => (
    <img
    src={imageUrl}
    alt={'ad${id}'}
    className='w-full object-contain rounded-lg'/>
);