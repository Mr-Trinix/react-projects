import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">back to Home</Link>
    </div>
  );
}

export default ErrorPage;