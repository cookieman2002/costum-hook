/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const styles = {
    navbar: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: lightgrey;
      & li {
        list-style: none;
        & a {
          color: black;
          text-decoration: none;
          font-weight: bold;
          font-size: 25px;
        }
      }
    `,
  };
  return (
    <div>
      <header css={styles.navbar}>
        <h1>Pokedex</h1>
        <nav>
          <menu>
            <li>
              <Link to="/">Forside</Link>
            </li>
          </menu>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
