/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import useFetch from "./hooks/usefetch";
import { useParams } from "react-router-dom";
import Types from "../Types";
export default function Pokemon() {
  const { name } = useParams();
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + name
  );
  const styles = {
    heading: css`
      text-transform: capitalize;
      text-align: center;
    `,
    pokemon: css`
      display: grid;
      grid-area: 
      "a a a a b b b b"
      "a a a a b b b b"
      "c c c c b b b b"
      "c c c c b b b b"


      
    `,
    images: css`
      border: solid;
      background-color: grey;
      grid: a
    `,
    stats: css`
      background-color: red;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid: c
    `,
  };
  return (
    <article css={styles.pokemon}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div css={styles.images}>
            <img
              src={data.sprites.front_default}
              alt={"Image of a" + data.name}
            />
            <img
              src={data.sprites.front_shiny}
              alt={"Image of a shiny" + data.name}
            />
          </div>
          <div css={styles.stats}>
            <h1 css={styles.heading}>{data.name}</h1>

            <Types types={data.types} />
          </div>
        </>
      )}
    </article>
  );
}
