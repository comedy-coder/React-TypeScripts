type ButtonProps = {
    variant :'primary' | 'second'
}
export const CustomButton = ({variant} : ButtonProps) => {
    return (
        <div className={`class-with-${variant}`}>  </div>
    )
}