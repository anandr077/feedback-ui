import { Route, Switch, useHistory } from "react-router-dom";
import { exchangeCodeForToken, getAuthToken, getUserId, getUserName, getUserRole, redirectToExternalIDP, setProfileCookies } from "../../service";
import { useLocation } from "react-router-dom";
import { default as React, default as React, useEffect, useState } from "react";
import Loader from "../Loader";

const withAuth = (WrappedComponent) => {

  const WithAuth = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {

      

      // Check if the user is logged in
      const isLoggedIn =
        getUserId() !== null &&
        getUserName() !== null &&
        getUserRole() !== null;
      console.log("isLoggedIn " + isLoggedIn)
      const hasAuthToken = getAuthToken();

      if (!isLoggedIn || !hasAuthToken) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");
        if (code) {
          loginUsing(code);
        } else {
          redirectToExternalIDP()
        }
      } else {
        setIsLoading(false)
      }

      
    }, []);
    if (isLoading) {
      return <Loader />;
    }
    return <Route render={() => <WrappedComponent {...props} />} />;
  };

  return WithAuth;
};
function loginUsing(code) {
  exchangeCodeForToken(code)
    .then((result) => {
      // alert("result " + JSON.stringify(result))
      setProfileCookies(result);
      window.location.href = "/#/";
      
    })
    .catch((e) => {
      alert("err " + JSON.stringify(e))
     });
}
export default withAuth;
