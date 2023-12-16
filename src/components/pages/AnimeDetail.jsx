import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../../api";

export const AnimeDetail = () => {
  const { id } = useParams();
  const [detailAnime, setDetailAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnimeById(id).then((result) => {
      setDetailAnime(result);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="AnimeDetail">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="AnimeDetail text-start">
        <div className="row">
          <div className="col col-lg-3">
            <div className="row">
              <div className="col">
                <img
                  src={detailAnime.images.jpg.image_url}
                  alt=""
                  className="w-100"
                />
                <a
                  className="btn btn1-outline w-100"
                  href={detailAnime.trailer.url}
                >
                  Trailer
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>Alternative Title</h5>
                <hr className="mt-0 mb-2" />
                <li>Japanese: {detailAnime.title_japanese}</li>
                <li>English: {detailAnime.title_english}</li>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>Information</h5>
                <hr className="mt-0 mb-2" />
                <li>Type: {detailAnime.type}</li>
                <li>Source: {detailAnime.source}</li>
                <li>Episode: {detailAnime.episodes}</li>
                <li>Status: {detailAnime.status}</li>
                <li>Rating: {detailAnime.rating}</li>
                <li>Duration: {detailAnime.duration}</li>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>Statistics</h5>
                <hr className="mt-0 mb-2" />
                <li>Score: {detailAnime.score}</li>
                <li>Rank: {detailAnime.rank}</li>
                <li>Popularity: {detailAnime.popularity}</li>
                <li>Favorites: {detailAnime.favorites}</li>
                <li>Members: {detailAnime.members}</li>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <iframe
                  src={
                    detailAnime.trailer.embed_url ||
                    "https://www.youtube.com/embed/dQw4w9WgXcQ"
                  }
                  frameborder="0"
                  className="w-100"
                  style={{
                    height: "500px",
                    borderRadius: "10px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                ></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>{detailAnime.title}</h1>
                <h5>Synopsys</h5>
                <hr className="mt-0 mb-2" />
                <p>{detailAnime.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
