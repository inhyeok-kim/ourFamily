import EventBox from "./EventBox";
import EventLine from "./EventLine";

interface props {
    isAllDay? : boolean
    time? : string
    title? : string
    date? : string
}
export default function EventBlock({
    isAllDay,
    time,
    title,
    date
} : props){

    return (
        <div className="w-full cursor-pointer">
            {
                isAllDay ? 
                <EventBox title={title} />
                :
                <EventLine time={time} title={title} />
            }
        </div>
    )
}