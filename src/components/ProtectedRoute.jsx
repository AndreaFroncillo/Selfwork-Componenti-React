
import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute({ children }) {

    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/register" replace />;
    }

    return children;
}
