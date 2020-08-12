import { Route } from 'react-router-dom';
import React from 'react';

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => {
        return (
          <route.component {...props} {...route.props} routes={route.routes} />
        );
      }}
    />
  );
}
