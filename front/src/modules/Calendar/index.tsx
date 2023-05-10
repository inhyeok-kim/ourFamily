import DayGridOfMonth from "./components/DayGridOfMonth";

interface props {
    isInputMode? : boolean
    width? : string | number
    height? : string | number
}
export default function Calendar({
    width = '100%',
    height = '100%'
} : props){

    return (
        <div className="min-w-[280px] min-h-[300px]" style={{width : width, height : height}}>
            <DayGridOfMonth />
        </div>
    )
}
