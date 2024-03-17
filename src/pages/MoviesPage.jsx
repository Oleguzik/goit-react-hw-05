import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import Form from "../Components/Form/Form";

import useFetch from "../Components/useFetch";

import MovieList from "../Components/MovieList/MovieList";
import Error from "../Components/Error/Error";
import Loader from "../Components/Loader/Loader";

function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const paramQuery = searchParams.get("query");

  const {
    data: movieList,
    isLoad,
    error,
    fetchData,
  } = useFetch({
    component: "moviesPage",
    param: query || paramQuery,
    data: [],
  });

  useEffect(() => {
    if (!query && !paramQuery) return;

    fetchData({
      component: "moviesPage",
      param: query || paramQuery,
      data: [],
    });
  }, [query, paramQuery, fetchData]);

  function handleSubmit(value) {
    setQuery(value);
    setSearchParams({ query: value });
  }

  return (
    <div className="jamboard">
      <Form onSubmit={handleSubmit} />
      {isLoad && <Loader />}

      {error && <Error message={error} />}

      {movieList.length > 0 && (
        <MovieList filmList={movieList} from={location} defLocation="/movies" />
      )}
    </div>
  );
}

export default MoviesPage;
