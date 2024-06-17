import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AuthLogin = () => {
    const { loginWithRedirect } = useAuth0();
    const location = useLocation();
    console.log("AuthLogin rendered, path:", location.pathname);

    // useEffect(() => {
    //     if (location.pathname === '/fy-admin') {
    //         console.log("Attempting to redirect...");
    //         loginWithRedirect();
    //     }


    // }, [loginWithRedirect, location.pathname]);

    return (
        <main>
            <div className="wrapper">
                <button onClick={() => loginWithRedirect()}> Log In</button >
            </div>
        </main>
    );


};

export default AuthLogin;