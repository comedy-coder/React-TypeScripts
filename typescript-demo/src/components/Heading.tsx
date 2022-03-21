type HeadingProps = {
    children : string 
}


export const Heading = (props:HeadingProps) => {
    return (
        <h2 className="">{props.children}</h2>
    )
}