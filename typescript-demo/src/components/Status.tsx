type StatusProps = {
    status : 'loading' | 'succes' | 'error'
}
export const Status = (props : StatusProps) => {
    let message 
    if (props.status === 'loading') {
        message = 'Loading...'
    }
    else if(props.status ==='succes')
    {
        message = 'Data - fetched thành công!'
    }
    else if(props.status ==='error')
    {
        message = 'Data - fetched thất bại !'
    }
    return (
        <div >
        <h2> Status - {message}</h2>
        </div>
        )

}