import React from 'react';
import s from './Pagination.module.css';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePage: (page: number) => void
}

const Pagination: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onChangePage}) => {
    console.log('USER RENDER');
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className="container text-center">
            <div>
                {pages.map(page => {
                    return <span onClick={(e) => {
                        onChangePage(page)
                    }} className={currentPage === page ? s.selectedPage : ''}/>
                })}
            </div>
        </div>
    )
};

export default Pagination;