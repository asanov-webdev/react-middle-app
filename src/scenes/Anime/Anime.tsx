import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spin } from "antd";
import { Anime as AnimeType } from "types";
import { setIsLoading, selectIsLoading } from "slices";
import { getOptions, url } from "graphQL/config";
import { AnimeCard } from "./AnimeCard";
import { getRandomAnimeId } from "./tools";
import styles from "./Anime.module.scss";

export const Anime = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [anime, setAnime] = useState<AnimeType | null>(null);

  const fetchRandomAnime = useCallback(() => {
    dispatch(setIsLoading(true));

    const animeId = getRandomAnimeId();
    const options = getOptions(animeId);

    fetch(url, options)
      .then(function (response) {
        if (response.status === 200) {
          response.text().then(function (text) {
            setAnime(JSON.parse(text).data.Media);
          });
          dispatch(setIsLoading(false));
        } else {
          fetchRandomAnime();
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className={styles.anime}>
      <Button type="primary" onClick={fetchRandomAnime}>
        SHOW RANDOM ANIME
      </Button>

      {isLoading && (
        <div id="loading" className={styles.loading}>
          <Spin />
        </div>
      )}

      {anime && <AnimeCard anime={anime} />}
    </div>
  );
};
