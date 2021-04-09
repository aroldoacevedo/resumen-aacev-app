import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BackButton } from './BackButton';
import MaterialTable from "material-table"; 
import { URL_BACKEND } from '../config/config';

export const ListCountry = () => {

    const [posts, setPosts] = useState([]);
    let { name } = useParams();

    useEffect(() => {
        const fetchPosts = async() => {
          const url = `${URL_BACKEND}/api/pais/${name}`;

          const response = await axios.get( url );
          setPosts(response.data);
        }
    
        fetchPosts();
      },[])

    return (
        <div className="container mt-6">
            <BackButton children = {'Volver'} />
            <h1 className="text-primary mb-3">Detalle histórico diario de casos COVID-19 </h1>

            <div style={{ maxWidth: "100%" }}>
             <MaterialTable 
               columns={[
                 { 
                   title: "CASOS ACTIVOS", 
                   field: "Active"
                 },
                 { 
                   title: "CASOS CONFIRMADO",
                   field: "Confirmed" 
                 }, 
                 { 
                   title: "CASOS MUERTES", 
                   field: "Deaths"
                 },
                 { 
                  title: "CASOS RECUPERACION", 
                  field: "Recovered"
                },
                 { 
                    title: "FECHA", 
                    field: "Date"
                  }
               ]}
               data={posts}
               title={"Histórico diario de casos en " + name}
             />
          </div> 
        </div>
    )
}
