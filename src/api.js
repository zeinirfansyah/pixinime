import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4";

export const getTopAnime = async () => {
  const TopAnime = await axios.get(`${baseUrl}/top/anime`);

  return TopAnime.data.data;
};

export const getAnimeById = async (id) => {
  const AnimeById = await axios.get(`${baseUrl}/anime/${id}`);

  return AnimeById.data.data;
};
