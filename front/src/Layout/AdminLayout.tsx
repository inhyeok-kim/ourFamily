import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet } from "react-router-dom";

export default function AdminLayout(){
    return (
        <Grid2 container>
      
        {/* /* navbar */}
            <Grid2 
                xs={12}
                height={'4rem'}
                border={'1px solid black'}
            >

            </Grid2>

            {/* aside */}
            <Grid2 
                xs={1}
                md={2}
                sm={0}
                border={'1px solid black'}
            >

            </Grid2>

            {/* main */}
            <Grid2 
                xs={11}
                md={10}
                sm={12}
                minHeight={'calc(100vh - 4rem)'}
                border={'1px solid black'}
            >
                <Outlet />
            </Grid2>

        </Grid2>
    )
}