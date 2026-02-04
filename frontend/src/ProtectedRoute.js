// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "./api"; // axios instance

// const ProtectedRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [authorized, setAuthorized] = useState(false);

//   useEffect(() => {
//     api
//       .get("/me")
//       .then(() => setAuthorized(true))
//       .catch(() => setAuthorized(false))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return null; // or loader
//   if (!authorized) return <Navigate to="/login" replace />;

//   return children;
// };

// export default ProtectedRoute;
