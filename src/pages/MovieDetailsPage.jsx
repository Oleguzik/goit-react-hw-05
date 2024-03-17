import { useRef, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonVideo2 } from "react-icons/bs";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

import sourceAPI from "../components/sourceApi.js";
import useFetch from "../components/useFetch.js";

import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";

import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(
    location.state?.from ?? location.state?.defLocation ?? "/"
  );

  const {
    data: movie,
    isLoading,
    error,
  } = useFetch({
    component: "movieDetailsPage",
    param: movieId,
    data: {},
  });

  const {
    vote_average: voteAverage,
    genres,
    id,
    poster_path: posterPath,
    title,
    overview,
    release_date: releaseDate,
    production_countries,
  } = movie;

  const poster = posterPath && `${sourceAPI.posterImagePath}${posterPath}`;
  const releaseYear = releaseDate && releaseDate.slice(0, 4);
  const userScore = Math.round(voteAverage * 10);
  const movieGenres = genres && genres.map((genre) => genre.name).join(", ");
  const country =
    production_countries &&
    production_countries.map((country) => country.name).join(", ");

  function GoBack({ to, children }) {
    return (
      <Link className={css.back} to={to}>
        {children}
      </Link>
    );
  }
  console.log(movie);

  return (
    <div className="jamboard">
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {id && (
        <div>
          <GoBack to={backLink.current}>
            <span className={css.arrow}>
              <BiArrowBack />
            </span>{" "}
            Back
          </GoBack>
          <div className={css.info}>
            <img
              className={css.poster}
              src={poster}
              alt={`${title} poster image`}
              loading="lazy"
            />
            <div>
              <h2>
                {title} ({releaseYear})
              </h2>
              <p>{`Production countries: ${country}`}</p>
              <br />
              <p>{`User score: ${userScore}%`}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{movieGenres}</p>
            </div>
          </div>
          <hr />
          <h3>Additional information</h3>
          <ul className={css.addInfo}>
            <li>
              <Link to="cast">
                <BsPersonVideo2 /> Cast
              </Link>
            </li>
            <li>
              <Link to="reviews">
                <BsLayoutTextSidebarReverse /> Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default MovieDetailsPage;
