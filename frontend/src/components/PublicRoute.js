import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged() ? (
          <Redirect
            to={{ pathname: '/dashboard', state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
