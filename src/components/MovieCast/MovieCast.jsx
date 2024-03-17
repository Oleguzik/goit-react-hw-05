import { useParams } from "react-router-dom";

import sourceAPI from "../sourceApi";
import useFetch from "../useFetch";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MoviesCast() {
  const { movieId } = useParams();
  const { data, isLoad, error } = useFetch({
    component: "movieCast",
    param: movieId,
    data: {},
  });
  const { id, cast } = data;

  return (
    <>
      {isLoad && <Loader />}
      {error && <Error message={error} />}
      {id && cast.length === 0 && (
        <p>We don&apos;t have any credits for this movie</p>
      )}
      {id && cast.length > 0 && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.item}>
              <img
                className={css.photo}
                src={`${sourceAPI.posterImagePath}${actor.profile_path}`}
                alt={`${actor.name} photo`}
                loading="lazy"
              />
              <h4 className={css.nameText}>{actor.name}</h4>
              <p className={css.charText}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
