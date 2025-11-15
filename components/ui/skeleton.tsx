export default function Skeleton({ count, id ,width , height}) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} style={{height:height,width:width}} className="rounded-2xl border border-gray-2  max-w-xs animate-pulse place-items-center bg-gray-2">
                </div>
            ))}
        </>
    )
}
