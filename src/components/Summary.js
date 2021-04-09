import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import './style.css'

export const Summary = ({ posts, loading}) => {

    let history = useHistory();

    if(loading){
        return <h2>Cargando...</h2>
    }

    return (
        <div className="row">
        {
            posts.map(post => ( 
                <div className="col-sm-3 my-3">
                    <Link to={`/country/${post.Slug}`}  className="link">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">{post.Country}</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Total de casos confirmados: <b> {post.TotalConfirmed} </b></li>
                                    <li className="list-group-item">Total de muertes: <b>{post.TotalDeaths}</b></li>
                                    <li className="list-group-item">Total de recuperaciones:<b>{post.TotalRecovered}</b></li>
                                </ul>
                            </div>
                        </div> 
                    </Link>
                </div>
            ))
        }
    </div>
    )
}
