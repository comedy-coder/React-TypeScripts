type ListProps<T> = 
{
    items : T[]
    onClick : (value : T) => void 
}




export const List =<T extends {} > ( {items, onClick} : ListProps<T> ) => {
    return ( 
        <div className="">
            <h2> List of Heoros</h2>
            {
                items.map((item,index) => {
                    return (
                        <div key={index} onClick={() => onClick(item)}>{item}</div>
                    )
                } )
            }
        </div>
    )
} 