import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbres = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbres.push(index);
    }

    const handle = (e, number) => {
        e.preventDefault();
        paginate(number)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbres.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={(e)=> {handle(e, number)}} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
