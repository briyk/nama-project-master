import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Import your UserContext here

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext); // Assuming you have a user state in your context

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" /> // Redirect to the login route if the user is not authenticated
        )
      }
    />
  );
};

export default ProtectedRoute;
