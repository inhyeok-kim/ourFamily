import DayBox from "./DayBox";

export default function DayGridOfMonth(){
    return (
        <div className="w-full h-full grid grid-cols-7 gap-[0.5px] bg-slate-300 select-none cursor-default border-[0.5px] border-slate-300 overflow-hidden">
            {
                oneTo31().map(i=>(
                    <DayBox date={i} />
                ))
            }
        </div>
    )
}
function oneTo31() : number[]{
    const result = [];
    for(let i=1; i<= 42; i++){
        result.push(i);
    }
    return result;
}