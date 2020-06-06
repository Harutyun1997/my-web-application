import React from 'react';
import {
    getUsersThunkCreator, getUsersMoreThunkCreator, followThunkCreator, removeFollowThunkCreator
} from "../../redax/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redax/users-selectors";


class UsersContainer extends React.Component {
    onChangePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };
    // page = this.props.currentPage;
    onShowMore = () => {
        this.props.getUsersMore(this.props.currentPage + 1, this.props.pageSize);
    };

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        console.log('RENDER USERS');
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount} onChangePage={this.onChangePage}
               currentPage={this.props.currentPage} pageSize={this.props.pageSize} users={this.props.users}
               page={this.page} removeFollow={this.props.removeFollow}
               onShowMore={this.onShowMore} followingProgress={this.props.followingProgress}
               follow={this.props.follow}/>
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingInProgress
//     };
// };
let mapStateToProps = (state) => {
    console.log('mapStateToProps USERS');
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state)
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addFollow: (id) => {
//             dispatch(followAC(id));
//         },
//         removeFollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         showMore: (users) => {
//             dispatch(showMoreAc(users));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users));
//         },
//         setUsersCount: (count) => {
//             dispatch(setUsersCountAC(count));
//         },
//         changePage: (page) => {
//             dispatch(changePageAC(page));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// };

export default compose(connect(mapStateToProps, {
    getUsers: getUsersThunkCreator,
    getUsersMore: getUsersMoreThunkCreator,
    follow: followThunkCreator,
    removeFollow: removeFollowThunkCreator,
}), withAuthRedirect)(UsersContainer)


