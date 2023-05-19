import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Calendar from "../modules/Calendar";
import { Paper } from "@mui/material";

export default function CalendarPage(){
    
    return (
        <Paper
            elevation={1}
            sx={{
                width:'100%',
                padding : '1rem',
                boxSizing:"border-box"
            }}
        >
            <Calendar />
        </Paper>
    )
}