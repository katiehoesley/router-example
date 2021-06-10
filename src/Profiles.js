import { useHistory } from 'react-router-dom'

const Profiles = (props) => {
    let history = useHistory()

    const people = props.contacts.map(contact => {
        return(
            <div id={contact.firstName}>
                <h3 onClick={ () =>history.push(`/profiles/${contact.firstName}/profile-image/`)}>
                    {contact.firstName} {contact.lastName}
                </h3>
                <button onClick={ () => history.push(`/profiles/${contact.firstName}`)}>
                    Expand Profile
                </button>
                <button onClick={ () => history.push(`/profiles/${contact.firstName}/profile-image/`)}>
                    Enlarge Profile Image
                </button>
            </div>
        )
    })
    return (
       <div>
           <h2>Contacts:</h2>
           {people}
       </div>
    )
}

export default Profiles; 

