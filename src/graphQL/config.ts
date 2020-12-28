import { getAnimeById } from "./queries";

export const url = "https://graphql.anilist.co";

export const getOptions = (id: number) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: getAnimeById,
      variables: { id: id },
    }),
  };
};
