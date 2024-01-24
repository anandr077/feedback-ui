import { Route, Switch, useHistory } from 'react-router-dom';
import {
  exchangeCodeForToken,
  redirectToExternalIDP,
} from '../../service';
import {
  getUserId,
  getUserName,
  getUserRole,
  setProfileCookies,
  getAuthToken,
} from '../../userLocalDetails';
import { useLocation } from 'react-router-dom';
import { default as React, default as React, useEffect, useState } from 'react';
import Loader from '../Loader';

const withAuth = (WrappedComponent) => {
  const history = useHistory();

  const WithAuth = (props) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      // Check if the user is logged in
      const isLoggedIn =
        getUserId() !== null &&
        getUserName() !== null &&
        getUserRole() !== null;
      const hasAuthToken = getAuthToken();

      if (!isLoggedIn || !hasAuthToken) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get('code');
        if (code) {
          loginUsing(code);
        } else {
          redirectToExternalIDP();
        }
      } else {
        setIsLoading(false);
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
      setProfileCookies(result);
      // history.push('')
      window.location.href = '/#/';
    })
    .catch((e) => {});
}
export default withAuth;