
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './style.css'
import { IconButton } from "@mui/material";

const productArr = [
    {
        imageUrl: "https://m-cdn.phonearena.com/images/article/98169-wide-two_1600/Apple-iPhone-history-the-evolution-of-the-smartphone-that-started-it-all.jpg ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " https://bgr.com/wp-content/uploads/2019/08/i11.jpeg?quality=98&strip=all.jpg ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " https://bgr.com/wp-content/uploads/2020/09/iphone-12-pro-beta-news.jpg?resize=720.jpg ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " https://ifullsupport.com/wp-content/uploads/2017/10/iphone8colors-1024x627.jpg ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
    {
        imageUrl: " ",
        price :"100",
        productTitle:"product title"
    },
]

const Product = ( { title,rowsCount,slidesPerView } ) => {
  return (
    <section className=" w-full mt-6">
        <h1 className=" text-lg font-bold mb-3">
            { title }
        </h1>
        <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        />
        { productArr.map(({ imageUrl, price, productTitle }, index )=> (
            <SwiperSlide key={index}>
                <ProductUnit
                imageUrl={imageUrl}
                price={price}
                productTitle={productTitle}
                id={index}
                />
            </SwiperSlide>
        ))}
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
    <IconButton
    sx={{
        padding: "4px",
        borderRadius: "5px",
        color: " blue ",
        margin: " 3px",
        marginBottom:"30 px",
    }} >
        <div className=" w-full">
            <img
            src={imageUrl}
            alt={'product_unit_${id}'}
            className=" w-full object-contain "
            />
            <h3 className=" text-sm font-semibold text-stone-900">{productTitle}</h3>
            <h3 className="  text-stone-900 font-bold text-lg "> Rs.{price}/-</h3>
        </div>
    </IconButton>
)