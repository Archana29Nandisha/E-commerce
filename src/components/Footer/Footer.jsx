
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Footer = () => {
    return(
        <footer className=' fixed bottom-0 left-0 z-[100] w-full p-5 py-2 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow '>
<IconButton
sx={{
    padding:"4px",
    borderRadius:"5px",
    color: " text-gray-700",
}}
>
    <div>
    <HomeIcon/>
    <p className=' text-xs font-semibold'>Home</p>
    </div>
</IconButton>
<IconButton 
sx={{
    padding:"4px",
    borderRadius:"5px",
    color: " text-gray-700",
}}
>
    <div>
    <CategoryIcon/>
    <p className=' text-xs font-semibold'>Category</p>
    </div>
</IconButton>
<IconButton 
sx={{
    padding:"4px",
    borderRadius:"5px",
    color: " text-gray-700",
}}>
    <div>
    <AccountCircleIcon/>
    <p className=' text-xs font-semibold'>Profile</p>
    </div>
    
</IconButton>
        </footer>
        );
};

export default Footer;