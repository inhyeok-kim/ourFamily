import { useLayoutEffect, useRef, useState } from "react"

interface props {
    time? : string,
    title? : string
}
export default function EventLine({
    time,
    title
}:props){
    const wrapper = useRef<HTMLDivElement>(null);
    const [isShowTime, setIsShowTime] = useState(true);

    useLayoutEffect(()=>{
        if(wrapper){
            console.log(wrapper.current?.offsetWidth);
            if(wrapper.current?.offsetWidth! < 180){
                setIsShowTime(false);
            }
        }
    },[]);

    return (
        <div ref={wrapper} className="w-full py-0.5 flex text-xs">
            <div className="w-5 flex justify-center items-center pl-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full">

                </div>
            </div>
            {
                isShowTime ?
                <div className="w-8">
                    {time}
                </div>
                : ''
            }
            <div className={"w-[calc(100%-"+ (isShowTime ? 2 : 1.5) +"rem)] overflow-hidden text-ellipsis whitespace-nowrap px-1"}>
                {title}
            </div>
        </div>
    )
}