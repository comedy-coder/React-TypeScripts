

type VerticalPosition= 'left' |'center'| 'right'
type HorizontalPosition = 'left' | 'center' |'right' 
type PositonProps = {
    position : 
    |Exclude<`${VerticalPosition} - ${HorizontalPosition}`, 'center-center'>
    | 'center'
}



export const Toast = ({position} : PositonProps) => {
    return (
        <div className="">Toast Notifacation Positon - {position    }</div>
    )
}