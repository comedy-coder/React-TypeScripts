type RandomNumberType = {
    value : number
}
type NegativeProps = RandomNumberType & {
    isNegative : boolean
    isPositive ?: never
    isZero  ?: never
}
type PositiveProps = RandomNumberType & {
    isNegative ?: never
    isPositive : boolean
    isZero  ?: never
}

type Zero = RandomNumberType & {
    isNegative ?: never
    isPositive ?: never
    isZero  : boolean
}

type RandomNumberProps = NegativeProps | PositiveProps | Zero




export const RandomNumber = ({isNegative, isPositive,isZero,value} :RandomNumberProps) =>{
    return (
        <div className="">
            {value } {isPositive && 'isPositive'} {isNegative && 'isNegative'} {''} {isZero && 'isZero'}
        </div>
    )
}