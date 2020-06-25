import React from 'react';
import User from "./User";
import Pagination from '@material-ui/lab/Pagination';
import {userDataType} from "../../type/alll-type";

type PropsType = {
    me: userDataType
    users: userDataType[]
    pageCount: number
    currentPage: number
    followingProgress: Array<number>
    onShowMore: () => void
    onChangePage: (event: any, page: number) => void
    follow: (id: number, userDataId: number, userData: any) => void
    removeFollow: (id: number, userDataId: number, userData: any) => void
}

const Users: React.FC<PropsType> = React.memo(({pageCount, currentPage, onShowMore, onChangePage, users, ...props}) => {
    return (
        <div className="container text-center ">
            <h1>Users</h1>
            <div className={' d-flex justify-content-center'}>
                <Pagination count={pageCount} page={currentPage} onChange={onChangePage}/>
            </div>
            {
                users.map((user: userDataType) =>
                    <User user={user}  {...props}/>
                )}
            {
                pageCount > currentPage ?
                    <button onClick={onShowMore} className="btn btn-outline-success">Show more</button> : ''
            }
        </div>
    )
});

export default Users;