import Ads from "./Ads"
import Product from "./Product"

const Home = () => {
  return (
    <div className=' p-5 w-full h-screen overflow-y-scroll pt-[100px]'>
        < Ads/>
        < Product title=" Trending Products" rowsCount={1} slidesPerView={3}/>-[]
    </div>
  )
}

export default Home