import React from "react";
import { Link } from "react-router-dom";

const TopAnimeCard = ({ topAnime, section_title }) => {
  return (
    <>
      <div className="Title">
        <h2 className="text-start">{section_title}</h2>
      </div>
      <div className="TopAnimeList">
        {topAnime &&
          topAnime.map((anime) => (
            <div className="TopAnimeCard" key={anime.mal_id}>
              <Link to={`/anime/${anime.mal_id}`} rel="noreferrer">
                <div className="TopAnimeCard__image">
                  <img
                    className="w-100"
                    src={anime.images.jpg.image_url}
                    alt=""
                  />
                </div>
                <div className="TopAnimeCard__details mx-2 mt-2">
                  <div className="row">
                    <div className="col">
                      <h6 className="text-start">{anime.title}</h6>
                    </div>
                    <div className="col-4">
                      <h6 className="text-end">{anime.score}</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-start">Realease: {anime.year}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default TopAnimeCard;
