import { Event } from "../types"
import EventBlock from "./event/EventBlock"


interface props {
    date : number
    events? : Event[]
}

export default function DayBox({
    date,
    events = []
} : props){


    return (
        <div className="bg-white hover:bg-gray-100">
            <div className="w-full h-6 text-right px-2 text-sm py-1 box-border">
                {date}
            </div>
            <div className="w-full h-[calc(100%-1.5rem)]">
                {
                    events.map(event=>{
                        return <EventBlock 
                            title={event.title}
                            time={event.time}
                            isAllDay={event.isAllDay}
                            date={event.data}
                        />
                    })
                }
            </div>
        </div>
    )
}