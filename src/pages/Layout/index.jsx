import React, { useContext } from "react";
import { MainContext } from "store";

import { Home } from "pages/Home";

export const MainLayout = ({ children }) => {
  const user = useContext(MainContext);
  if (user.token.length === 0) {
    return <Home />;
  }
  return <div>{children}</div>;
};