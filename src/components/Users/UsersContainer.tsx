import React from 'react';
import {
    getUsersThunkCreator, getUsersMoreThunkCreator, followThunkCreator, removeFollowThunkCreator
} from "../../redax/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {userDataType} from "../../type/alll-type";
import {AppStateType} from "../../redax/redux-store";

import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getMe,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redax/users-selectors";

type MapStatePropsType = {
    me: any
    users: userDataType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    getUsersMore: (currentPage: number, pageSize: number) => void
    follow: (id: number, userDataId: number, userData: any) => void
    removeFollow: (id: number, userDataId: number, userData: any) => void
}
type OwnPropsType = {
    title: string
}


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UsersContainer extends React.PureComponent <PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onShowMore = () => {
        this.props.getUsersMore(this.props.currentPage + 1, this.props.pageSize);
    };
    onChangePage = (event: any, page: number) => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {

        const {onChangePage} = this;
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        console.log('RENDER USERS');
        return <>
        {this.props.isFetching ? <Preloader/> : ''}
        <h2>{this.props.title}</h2>
        <Users pageCount={pageCount} onChangePage={onChangePage}
               currentPage={this.props.currentPage} users={this.props.users}
               removeFollow={this.props.removeFollow}
               onShowMore={this.onShowMore} followingProgress={this.props.followingProgress}
               follow={this.props.follow} me={this.props.me}/>
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersPage(state),
        me: getMe(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state)
    };
};

export default compose(
    //    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = DefaultRootState>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        getUsersMore: getUsersMoreThunkCreator,
        follow: followThunkCreator,
        removeFollow: removeFollowThunkCreator,
    }), withAuthRedirect)(UsersContainer)


