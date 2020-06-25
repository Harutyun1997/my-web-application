import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

window.props = [];

const Profile = React.memo(props => {
    console.log('RENDER Profile');

    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
        </div>
    )
});

// }class Profile extends PureComponent {
//
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({a: 12});
//         }, 3000);
//     }
//
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     debugger;
//     //     return nextProps != this.props || nextState != this.state;
//     // }
//
//     render() {
//         console.log('RENDER Profile');
//         window.props.push(this.props);
//
//         return (
//             <div>
//                 <ProfileInfoContainer/>
//                 <MyPostsContainer/>
//             </div>
//         )
//     }
// }

export default Profile;