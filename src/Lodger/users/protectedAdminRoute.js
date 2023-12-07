import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  if (currentUser && currentUser.role === "ADMIN") {
    return children;
  }
  return <Navigate to="/Lodger/Login" />;
}

export default ProtectedAdminRoute;