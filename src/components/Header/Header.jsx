import menu from '../../images/menu-navigation-grid-1528-svgrepo-com.svg'
import cart from '../../images/cart-4-svgrepo-com.svg'
import search from '../../images/search-svgrepo-com.svg'
const Header = () => {
    return(
        <header className=' fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow'>
            {/* header left */}
            <div className='flex items-center'>
                <img src={menu} alt='menu' className='w-6 h-6 object-contain cursor-pointer'/>
                <h1 className=' ml-2 text-sm font-bold'>Archi
                <span className=' text-neutral-600'>29</span>
                </h1>
                <div className=' overflow-hidden ml-2 flex items-center rounded-full bg-slate-500 '>
                    <input type= 'text' placeholder="Search" className=' ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>
                    <img src={search} alt='search'className='w-6 h-6 object-contain cursor-pointer mr-2'/>
                </div>
                <h1>bbb</h1>
            </div>
            {/* header right */}
            <img src={cart} alt='cart' className='w-6 h-6 object-contain cursor-pointer'/>
        </header>
    )
}

export default Header;