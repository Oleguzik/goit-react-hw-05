import { useParams } from "react-router-dom";

import useFetch from "../useFetch";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";

function MoviesReviews() {
  const { movieId } = useParams();
  const { data, isLoad, error } = useFetch({
    component: "movieReviews",
    param: movieId,
    data: {},
  });
  const { id, results } = data;

  return (
    <>
      {isLoad && <Loader />}
      {error && <Error message={error} />}
      {id && results.length === 0 && (
        <p>We don&apos;t have any review for this movie</p>
      )}
      {id && results.length > 0 && (
        <ul>
          {results.map((rev) => (
            <li key={rev.id}>
              <h4>{`Author: ${rev.author}`}</h4>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesReviews;
