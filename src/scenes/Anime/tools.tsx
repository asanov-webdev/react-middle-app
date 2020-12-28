import React, { ReactNode } from "react";
import { Anime } from "types";
import { AnimeCardRow } from "./types";
import styles from "./Anime.module.scss";

const MAX_ANIME_ID = 10000;

export const getRandomAnimeId = () => Math.floor(Math.random() * MAX_ANIME_ID);

export const getTitle = (anime: Anime) => {
  const { title } = anime;

  return title.english ?? title.romaji ?? title.native ?? "*No title provided*";
};

export const getRows = (anime: Anime): AnimeCardRow[] => {
  const { genres, seasonYear, isAdult, meanScore, season, status } = anime;

  return [
    { name: "Genres", value: genres },
    { name: "For adults", value: isAdult ? "Yes" : "No" },
    { name: "Mean score", value: meanScore ?? "-" },
    { name: "Year", value: seasonYear ?? "-" },
    { name: "Season", value: season ?? "-" },
    { name: "Status", value: status ?? "-" },
  ];
};

const renderRow = (row: AnimeCardRow): ReactNode => {
  let { name, value } = row;

  switch (name) {
    case "Genres":
      value = ((value as Anime["genres"]) ?? []).map((genre) => (
        <span className={styles.genre}>{genre}</span>
      ));
      break;

    default:
      break;
  }

  return (
    <p>
      <b>{name}: </b>
      {value}
    </p>
  );
};

export const renderRows = (rows: AnimeCardRow[]): ReactNode => {
  return <>{rows.map((row) => renderRow(row))}</>;
};
