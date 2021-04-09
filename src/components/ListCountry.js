import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BackButton } from './BackButton';
import MaterialTable from "material-table"; 

export const ListCountry = () => {

    const [posts, setPosts] = useState([]);
    let { name } = useParams();

    useEffect(() => {
        const fetchPosts = async() => {
          const url = `http://localhost:8080/api/pais/${name}`;
          //const url = `https://summary-aacevedo-backend.herokuapp.com/api/country/${name}`;

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
