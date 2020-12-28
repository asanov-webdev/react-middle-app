import React, { FC } from "react";
import { Card } from "antd";
import { Anime } from "types";
import { getTitle, getRows, renderRows } from "./tools";
import styles from "./Anime.module.scss";

type AnimeCardType = {
  anime: Anime;
};

export const AnimeCard: FC<AnimeCardType> = ({ anime }) => {
  const cardTitle = getTitle(anime);
  const rows = getRows(anime);

  return (
    <Card title={<b className={styles.title}>{cardTitle}</b>}>
      {renderRows(rows)}
    </Card>
  );
};
