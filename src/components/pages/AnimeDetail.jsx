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
      <div className="AnimeDetail">
        <h1>{detailAnime.title}</h1>
      </div>
    </>
  );
};
