import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const loc = useLocation();
    console.log(loc);
    if(loader){
        return <h2 className="text-3xl">Loading.....</h2>
    }

    if(user){
        return children;
    }
    return <Navigate state={loc.pathname} to="/login"  replace={true} />
};

export default PrivateRoute;