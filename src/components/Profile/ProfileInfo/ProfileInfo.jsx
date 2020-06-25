import React, {useState} from 'react';
import s from '../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ImageUploader from 'react-images-upload';
import ProfileInfoDataUser from "./ProfileInfoDataUser";
import ProfileInfoDataUserForm from "./ProfileInfoDataUserForm";

const ProfileInfo = (props) => {
    let [editMode, setEditModeProfile] = useState(false);

    if (!( props.name && props.age && props.location.city)) {
        return <Preloader/>
    }

    // console.log(editModePR);
    const activeEditUserData = () => {
        setEditModeProfile(true);
    };

    const deactivateEditMode = () => {
        setEditModeProfile(false);
    };


    const onSelectPhoto = (picture) => {
        if (picture.length) {
            props.updatePhoto(picture[0], props.authMe);
        }

    };
    let imageSrc = props.src;
    if (imageSrc && imageSrc.indexOf('http') === -1) {
        imageSrc = require('../../../assets/usersImage/' + imageSrc);
    }

    const saveData = (data) => {
        console.log(data);
        data['name'] = data['firstName'] + ' ' + data['lastName'];
        console.log(props.authMe);
        let userNewData = [];
        Object.keys(props.authMe).forEach(function (item) {


            if (data[item]) {
                userNewData[item] = data[item];
            }
            else if (item === 'location') {
                userNewData[item] = {};
                userNewData[item]['country'] = data['country'];
                userNewData[item]['city'] = data['city'];
            }
            else {
                userNewData[item] = props.authMe[item];
            }

        });
        debugger;
        console.log(userNewData); // value
        deactivateEditMode();
        props.saveData(userNewData);
    };
    console.log(props);
    let re = /(\w+)\s(\w+)/;
    let fullName = props.name;
    let firstName = fullName.replace(re, '$1');
    let lastName = fullName.replace(re, '$2');
    let initialValues = {
        lastName: firstName,
        firstName: lastName,
        age: props.age,
        country: props.location.country,
        city: props.location.city,
        email: props.email,
        password: props.password
    };
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className={s.img_logo} alt=""/>
            </div>
            <div>
                <img
                    src={imageSrc ? imageSrc : "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    className={s.img_user} alt=""/>
                {editMode ?
                    <ProfileInfoDataUserForm initialValues={initialValues} onSubmit={saveData}
                                             deactivateEditMode={deactivateEditMode}/> :
                    <ProfileInfoDataUser {...props} updateUserInfo={activeEditUserData}/>}
            </div>
            <div className={s.fileContainer}>

                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={onSelectPhoto}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </div>
            <div>
            </div>
        </div>
    )
};
export default ProfileInfo;