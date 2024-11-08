import { Route, Switch, useHistory } from 'react-router-dom';
import {
  exchangeCodeForToken,
  handleRedirect
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
import { isNullOrEmpty } from '../../utils/arrays';

const withAuth = (WrappedComponent) => {
  const history = useHistory();

  const WithAuth = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    // alert('withAuth' + WrappedComponent);

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
          handleRedirect();
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
      if (result === undefined || result === null ) {
        return handleRedirect();
      }
      setProfileCookies(result);
      window.location.href = '/#/';
      // history.push('/#');
    });
}
export default withAuth;