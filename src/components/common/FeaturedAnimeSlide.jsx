import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const FeaturedAnimeSlide = ({ animeSlide }) => {
  // limit word
  function limitWords(text, limit) {
    return text.split(" ").slice(0, limit).join(" ");
  }

  const settings = {
    // auto slide
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "1rem" }}>
        {dots.map((dot) =>
          React.cloneElement(dot, {
            style: {
              ...dot.props.style,
              background: dot.props.className.includes("slick-active")
                ? "var(--color3)"
                : "white",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "1rem",
            },
          })
        )}
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        {animeSlide &&
          animeSlide.map((anime) => (
            <div key={anime.mal_id}>
              <div
                className="topAnime_list"
                style={{
                  backgroundImage: `url(${anime.trailer.images.maximum_image_url})`,
                }}
              >
                <div className="row">
                  <div className="col">
                    <div className="anime-info mt-md-5 text-center text-md-start">
                      <h1>{anime.title}</h1>

                      <h4>
                        {anime.score} | {anime.year} | {anime.episodes} eps
                      </h4>
                      <h4>{anime.genres.name}</h4>
                      <h4>{anime.rating}</h4>

                      <hr />

                      <p className="d-none d-md-block">
                        {limitWords(anime.synopsis, 50)} ...
                      </p>
                      <div className="animeNav">
                        <Link
                          to={`/anime/${anime.mal_id}`}
                          rel="noreferrer"
                          className="btn btn1-outline mx-1"
                        >
                          More Info
                        </Link>
                        <a
                          href={anime.trailer.url}
                          target="_blank"
                          className="btn btn1-outline mx-1"
                        >
                          Trailer
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col order-first order-lg-0">
                    <div className="anime-image">
                      <img
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        className="mx-auto  my-md-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};
