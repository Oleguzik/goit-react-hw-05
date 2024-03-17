import css from "./Loader.module.css";
import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className={css.block}>
      <Bars
        height="50"
        width="50"
        color="DimGray"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <span className={css.info}>Loading ...</span>
    </div>
  );
}
export default Loader;
