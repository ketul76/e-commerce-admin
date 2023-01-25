import { Divider, Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SellIcon from '@mui/icons-material/Sell';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Add } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Button from "@mui/material/Button";
import data from '../data';
import Box from "@mui/system/Box";


function Aside({apiData}){
  return(
    <>
      <div className="aside" style={{position:"absolute",left:"0"}}>
      <Box>
        <Drawer variant='permanent' anchor="left" >
          <div className="asideMenu">
            <List>
            <ListItem >
              <DashboardIcon  color="action" />
              <ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Dashboard</ListItemText>
            </ListItem>
            <ListItem>
              <Inventory2Icon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Products</ListItemText><ExpandMoreIcon/>
            </ListItem>
            <ListItem>
              <AddShoppingCartIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Orders</ListItemText><ExpandMoreIcon/>
            </ListItem>
            <ListItem>
              <SupervisorAccountIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Customers</ListItemText><ExpandMoreIcon/>
            </ListItem>
            <ListItem>
              <EqualizerIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Statistics</ListItemText>
            </ListItem>
            <ListItem>
              <RateReviewIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Reviews</ListItemText>
            </ListItem>
            <ListItem>
              <AccountBalanceWalletIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Transactions</ListItemText>
            </ListItem>
            <ListItem>
              <StorefrontIcon color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Sellers</ListItemText>
            </ListItem>
            <ListItem>
              <SellIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Hot Offers</ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <CreateIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Appearence</ListItemText><ExpandMoreIcon/>
            </ListItem>
            <ListItem>
              <SettingsIcon  color="action"/><ListItemText sx={{ paddingLeft: "10px" }}>Settings</ListItemText>
            </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>
      </div>
      <div className="main">
      <Box position='static' className="box" sx={{
       marginTop:"50px"}}>
            <div style={{display:"flex",justifyContent:"space-between",padding:"25px"}}>
              <Typography variant="h5">Products Grid</Typography>
              <Stack direction="row" spacing={2} >
                <Button variant="contained" startIcon={<CloudUploadIcon />} >  Export</Button>
                <Button variant="contained" startIcon={<Add/>} > Create New</Button>
              </Stack>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"25px",padding:"0 20px"}}>
              <input type="text" placeholder="Search" />
              <Stack direction="row" spacing={2}>
                <Button sx={{color:"#949494"}} endIcon={<KeyboardArrowDownIcon color='action' />}>Category  </Button>
                <Button  sx={{color:"#949494"}} endIcon={<ImportExportIcon color='action' />}>Last Added </Button>
              </Stack>
            </div>
      </Box>
      <Container sx={{marginTop:"20px"}}>
        <Grid container spacing={{md: 10, xs: 2  }}  justifyContent="center" columnSpacing={4} rowSpacing={4}>
          {apiData.map((item) => (
            <Grid item  lg='3' xs='6'>
              <Card sx={{padding:"25px"}}> 
                <CardMedia 
                  sx={{height:"200px"}}
                  image={item.image}
                />
                <Typography variant="body1">{item.title}</Typography><br/>
                <Typography variant="body2">{item.category}</Typography><br/>
                <Typography variant="body2">{item.description}</Typography><br/>
                <Typography variant="body1" sx={{fontWeight:"700"}}> Price: {item.price}</Typography>
                <Typography variant="body1" sx={{fontWeight:"700"}}> Count:  {item.rating.count}</Typography>
                <Typography variant="body1" sx={{fontWeight:"700"}}> Rating:  {item.rating.rate}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    </>
  )
}

export default Aside;