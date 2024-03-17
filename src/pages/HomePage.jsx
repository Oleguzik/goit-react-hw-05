import { useLocation } from "react-router-dom";
import useFetch from "../components/useFetch";

import MovieList from "../components/MovieList/MovieList";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";

function HomePage() {
  const location = useLocation();
  const {
    data: filmList,
    isLoading,
    error,
  } = useFetch({
    component: "homePage",
    data: [],
  });

  return (
    <div className="jamboard">
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {!error && filmList.length > 0 && (
        <MovieList filmList={filmList} from={location} initLocation="/" />
      )}
    </div>
  );
}

export default HomePage;
