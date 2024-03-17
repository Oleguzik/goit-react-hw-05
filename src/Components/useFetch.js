import { useEffect, useState } from "react";
import sourceAPI from "./sourceApi";

function useFetch(initialState) {
  const [state, fetchData] = useState(initialState);
  const [data, setData] = useState(state.data);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoad(true);
        setError(null);
        switch (state.component) {
          case "homePage":
            setData(await sourceAPI.getTrendingMovies());
            break;
          case "moviesPage":
            if (!state.param) return;
            setData(await sourceAPI.getMoviesByQuery(state.param));
            break;
          case "movieDetailsPage":
            setData(await sourceAPI.getMovieDetails(state.param));
            break;
          case "movieCast":
            setData(await sourceAPI.getMovieCast(state.param));
            break;
          case "movieReviews":
            setData(await sourceAPI.getMovieReviews(state.param));
            break;
        }
      } catch (error) {
        setError(
          error?.message ?? "Something went wrong. Please, try again later."
        );
      } finally {
        setIsLoad(false);
      }
    }
    fetchData();
  }, [state]);
  return { data, isLoad, error, fetchData };
}

export default useFetch;
