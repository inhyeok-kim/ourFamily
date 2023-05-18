import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Drawer, ListItemText, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";

export default function Navbar(){

    return (
        <Grid2 
            xs={12}
            height={'3rem'}
        >
            <Grid2 
                container
                height={'100%'}
                alignItems={"center"}
                sx={{display : {xs:'none',sm:'block'}}}    
            >
            </Grid2>
            <NavAppBar />
            
        </Grid2>
        
    )
}


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});
function NavAppBar(){
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar 
                color="primary"
                position="fixed"
                sx={{height:'3rem',display : {xs:'block',sm:'none'}, zIndex : (theme)=>theme.zIndex.drawer+1}}    
            >
                <Grid2 
                    container
                >
                    <Grid2 xs={2} height={'100%'} textAlign={"center"}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={()=>{setOpenMenu(!openMenu)}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid2>
                    
                    <Grid2 xs={8} height={'100%'}>

                    </Grid2>
                    <Grid2 xs={2} height={'100%'}>

                    </Grid2>
                </Grid2>
                <Drawer
                    anchor="top"
                    open={openMenu}
                    onClose={()=>{setOpenMenu(false)}}
                    sx={{'& .MuiDrawer-paper' : {top:'48px',background:'white'}}}
                >
                    <Grid2 width={'100vw'}>
                        <MenuList>
                            <MenuItem sx={{color : grey[800]}} selected={true}>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItem>
                            <MenuItem sx={{color : grey[800]}}>
                                <ListItemText>Calendar</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Grid2>
                </Drawer>
            </AppBar>
        </ThemeProvider>
    )
}