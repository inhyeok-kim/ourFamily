import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useMatches, useNavigate } from "react-router-dom";
import {useEffect, useMemo} from 'react';

export default function Aside(){
    const navigate = useNavigate();
    const matches = useMatches();

    const currMenu = useMemo(()=>{
        return matches[1].pathname;
    },[matches]);

    function fnLinkTo(url:string){
        navigate(url);
    }
    return (
        <Grid2
            xl={1}
            sm={2}
            xs={0}
            sx={{
                display : {sm:'block', xs:'none'}
            }}
            boxShadow={'-5px 1px 10px 0px grey'}
            zIndex={1}
        >
            <Grid2
                container
                height={'3rem'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    ourFam
                </Typography>
            </Grid2>
            <Divider />
            <MenuList>
                <MenuItem sx={{color : grey[700]}} selected={currMenu === '/Dashboard'}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </MenuItem>
                <MenuItem sx={{color : grey[700]}} selected={currMenu === '/Calendar'}>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText onClick={()=>{fnLinkTo('/Calendar')}}>Calendar</ListItemText>
                </MenuItem>
            </MenuList>
        </Grid2>
    )
}