import React, { useEffect, useState } from "react";
import { getTopAnime } from "../../api";
import TopAnimeCard from "../common/TopAnimeCard";
import "../../css/HomePage.css";
import { FeaturedAnimeSlide } from "../common/FeaturedAnimeSlide";

export const HomePage = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [featuredAnime, setFeaturedAnime] = useState([]);

  useEffect(() => {
    getTopAnime().then((result) => {
      const featuredAnime = result.filter((anime) =>
        [
          "Gintama: The Final",
          "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
          "Fullmetal Alchemist: Brotherhood",
          "Steins;Gate",
        ].includes(anime.title)
      );

      setTopAnime(result);
      setFeaturedAnime(featuredAnime);
    });
  }, []);

  return (
    <>
      <div className="HomePage">
        <div className="HomePage__FeaturedAnime">
          <FeaturedAnimeSlide animeSlide={featuredAnime} />
        </div>
        <div className="HomePage_Recomendation">
          <TopAnimeCard
            topAnime={topAnime.slice(5, 10)}
            section_title={"Recomendation"}
          />
        </div>
        <div className="HomePage__TopAnime">
          <TopAnimeCard
            topAnime={topAnime.slice(0, 5)}
            section_title={"Top Anime"}
          />
        </div>
      </div>
    </>
  );
};
