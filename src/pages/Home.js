/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";


import { Link } from "react-router-dom";
import useFetch from "./hooks/usefetch";

export default function Home() {
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=5000"
  );
  const [searchTerm, setSearchTerm] = useState("")

  const styles = {
    pokelist: css`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 30px;
    background-color: red;


   
    `,
    names: css`
    color:black;
    text-decoration: none;
    font-size:25px;
    font-weight: bold;
    ` 

  }
  

  return (
    <div>

      <input type="text" placeholder="Search.." onChange={event => {setSearchTerm(event.target.value)}} />
    <div css={styles.pokelist}>
      {isLoading ? (
        <p>Loading...</p>
        ) : (
          data.results.filter((val) =>{
           
            if(searchTerm === "") {
              return val
            }
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          })?.map((item) => (
            <div key={item.name} >
           

          <p >
            
            <Link css={styles.names} to={"/pokemon/" + item.name}>{item.name}</Link>
          </p>
          </div>
        ))
        )}
    </div>
        </div>
  );
}
