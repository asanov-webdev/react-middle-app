import React from "react";
import { useSelector } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { Anime, Authorization } from "scenes";
import { selectIsLoggedIn } from "slices";
import { client } from "graphQL/client";
import styles from "./assets/scss/App.module.scss";
import "antd/dist/antd.css";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ApolloProvider client={client}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <Authorization />
          {isLoggedIn && <Anime />}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
