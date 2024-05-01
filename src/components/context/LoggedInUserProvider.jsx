"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);
const SetUserContext = createContext(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

export function useSetUserContext() {
  const context = useContext(SetUserContext);
  if (context === undefined) {
    throw new Error("useMenuToggle must be used within a MenuProvider");
  }
  return context;
}

export function LoggedInUserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  function setUser(state) {
    setLoggedInUser(state);
  }

  return (
    <UserContext.Provider value={loggedInUser}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}
