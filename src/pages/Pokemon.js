import useFetch from "./hooks/usefetch";
import {useParams} from "react-router-dom"
export default function Pokemon() {
    const {name} = useParams()
    const {data, isLoading} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=5000"+name)
  return (<article>
    {isLoading ? <p>Loading...</p> : (
        <h1>{data.name}</h1>
        
    ) }
  </article>);
}
