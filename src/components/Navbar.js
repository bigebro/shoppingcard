import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar({ cartItemsQty }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${styles.root} ${
        styles[isHome ? "white-text" : "black-text"]
      }`}
    >
      <Link to="/">
        <h1 className={styles.logo}>Hero cards</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        <div className={styles.icon}>
          <FaCartPlus />
          <span className={styles["icon-num"]}>{cartItemsQty}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
