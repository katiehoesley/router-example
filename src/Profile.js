
import { useParams, useHistory } from 'react-router-dom'


const Profile = (props) => {
    let { id } = useParams() 
    let user = props.contacts.filter(el => el.firstName === id)[0]
    
    
    return (
        <div>
            <h1>{user.firstName}'s Profile</h1>
            <h4>Name: {user.firstName} {user.lastName}</h4>
            <h4>Birthday: {user.birthday}</h4>
            <img src={user.profileImage} alt="profile_img" width="193" height="130"/>
        </div>
    )
}

export default Profile; 