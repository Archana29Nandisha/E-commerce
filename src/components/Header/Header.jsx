
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


const Header = () => {
    return(
        <header className=' fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow py-5 px-2'>
            {/* header left */}
            <div className='flex items-center'>
                <IconButton><MenuIcon/></IconButton>
                <h1 className=' ml-2 text-sm font-bold'>Archi
                <span className=' text-neutral-600'>29</span>
                </h1>
                <div className=' overflow-hidden ml-2 flex items-center rounded-full bg-slate-500 '>
                    <input type= 'text' placeholder="Search" className=' hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>
                    <IconButton><SearchIcon className=' text-gray-700'/></IconButton>
                </div>
            
            </div>
            {/* header right */}
            <IconButton><ShoppingCartIcon/></IconButton>
        </header>
    )
}

export default Header;