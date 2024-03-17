import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="jamboard">
      <h2>Page not found</h2>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default NotFoundPage;
