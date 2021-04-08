import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BackButton } from './BackButton';
import './style.css'

export const ListCountry = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let { name } = useParams();

    useEffect(() => {
        const fetchPosts = async() => {
          setLoading(true);
          const url = `http://localhost:8080/api/country/`+ name;
          //const url = `https://summary-aacevedo-backend.herokuapp.com/api/country/`+ name;

          const response = await axios.get( url );
          setPosts(response.data);
          setLoading(false);
        }
    
        fetchPosts();
      },[])
 
    return (
        <div className="container mt-6">
            <BackButton children = {'Volver'} />
            <h1 className="text-primary mb-3">Detalle histórico diario de casos COVID-19 ({ name }) </h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>CASOS ACTIVOS</th>
                        <th>CASOS CONFIRMADO</th>
                        <th>CASOS MUERTES</th>
                        <th>CASOS RECUPERACION</th>
                        <th>FECHA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr>
                                <td>{post.Active}</td>
                                <td>{post.Confirmed}</td>
                                <td>{post.Deaths}</td>
                                <td>{post.Recovered}</td>
                                <td>{post.Date}</td>
                            </tr>
                            
                        ))
                    }
                </tbody>
        </table>
        </div>
    )
}
