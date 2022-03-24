import { Login } from "./Login"
import {ProfileProps} from './Profile'
type PrivateProp = {
    isLoggedIn : boolean,
    Component : React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn  , Component} : PrivateProp) => {
    if(isLoggedIn) {
        return < Component name='ngo thanh dat' />
    }
    else {
        return (<Login />)
    }
}