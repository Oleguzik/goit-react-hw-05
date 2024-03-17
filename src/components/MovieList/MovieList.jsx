import { Link } from "react-router-dom";
import { PiFilmReelThin } from "react-icons/pi";
import css from "./MovieList.module.css";

function MovieList({ filmList, from, defLocation }) {
  return (
    <ul>
      {filmList.map((film) => (
        <li key={film.id}>
          <PiFilmReelThin className={css.icon} />{" "}
          <Link to={`/movies/${film.id}`} state={{ from, defLocation }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
