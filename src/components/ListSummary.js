import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Summary } from './Summary';
import { Pagination } from './Pagination';
import { URL_BACKEND } from '../config/config';

export const ListSummary = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        const fetchPosts = async() => {
          setLoading(true);
          const url = `${URL_BACKEND}/api/resumen`;

          const response = await axios.get( url );
          setPosts(response.data);
          setLoading(false);
        }
    
        fetchPosts();
      },[])
   
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-6">
            <h1 className="text-primary mb-3">Listado de casos COVID-19</h1>
            <Summary posts={currentPosts} loading={loading}  />
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length} 
                paginate={paginate}
            />
        </div>
    )
}
