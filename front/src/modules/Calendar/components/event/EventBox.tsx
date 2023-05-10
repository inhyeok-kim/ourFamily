interface props {
    title? : string
}

export default function EventBox({
    title
} : props){

    return (
        <div className="w-full py-0.5 flex text-xs bg-slate-500 text-white border-b-[0.5px] border-white">
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap px-2">
                {title}
            </div>
        </div>
    )
}