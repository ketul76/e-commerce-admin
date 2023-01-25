import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header(){
  return(
    <>
    <AppBar sx={{backgroundColor:"#FFFFFF",zIndex:"2500"}}>
        <Toolbar  sx={{ display: "flex", justifyContent: "space-between" }} >    
          <div className="logo-img">
            <img src="./images/admin-logo.png" />
            <div className="logo-text">
              <Typography variant="h6" sx={{color:"#4363BF"}}>Admin</Typography>
              <Typography variant="body2" sx={{color:"#2572CB"}}>ecommerce </Typography>
            </div>
          </div>
          <div className="search" style={{display:"flex",alignItems:"center",gap:"15px" }}> 
              <SearchIcon color="action"  />
              <input type="text" placeholder="Search" />
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <LightModeIcon color="action"/>
            <NotificationsIcon color="action" />
            <div style={{display:"flex",alignItems:"center"}}>
            <img className="admin" src="./images/admin.jpg" /><ArrowDropDownIcon color="action" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;