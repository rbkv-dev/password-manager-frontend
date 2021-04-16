import React, { useState } from "react";

export const MainContext = React.createContext({});

export const MainProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [qr_code, setQRcode] = useState("");
  
  return (
    <MainContext.Provider
      value={{
        token, setToken,
        qr_code, setQRcode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const MainConsumer = MainContext.Consumer;
