import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./hooks/usefetch";

export default function Home() {
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=5000"
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.results?.map((item) => (
          <p key={item.name}>
            <Link to={"/pokemon/" + item.name}>{item.name}</Link>
          </p>
        ))
      )}
    </div>
  );
}
