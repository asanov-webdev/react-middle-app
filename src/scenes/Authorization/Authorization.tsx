import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { getAuthorizeHref } from "oauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "tools";
import {
  setLoggedIn,
  setAccessToken,
  selectIsLoggedIn,
} from "slices";
import spotifyLogo from "assets/icons/spotify-logo.svg";
import styles from "./Authorization.module.scss";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
removeHashParamsFromUrl();

export function Authorization() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
    }
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(setLoggedIn(false));
    dispatch(setAccessToken(""));
  }, [dispatch]);

  return (
    <div className={styles.authorization}>
      {!isLoggedIn && (
        <Button
          type="primary"
          onClick={() => window.open(getAuthorizeHref(), "_self")}
          className={styles.spotifyLoginBtn}
        >
          <img
            src={spotifyLogo}
            alt="spotifyLogo"
            className={styles.spotifyLogo}
          />
          LOG IN WITH SPOTIFY
        </Button>
      )}
      {isLoggedIn && (
        <>
          <Button type="primary" onClick={logout}>
            LOG OUT
          </Button>
        </>
      )}
    </div>
  );
}
