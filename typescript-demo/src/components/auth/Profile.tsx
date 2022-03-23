export type ProfileProps = {
    name : string
}

export const Profile = ({name} : ProfileProps) => {
    return <div className=""> Provite profile Name is {name}</div>
}