import { useParams } from 'react-router-dom'

const ProfileImage = (props) => {
    let { id } = useParams() 
    let image = props.contacts.filter(el => el.firstName === id)[0].profileImage

    return (
        <div>
            <img src={image} alt="profile_img"/>
        </div>
    )
}

export default ProfileImage; 