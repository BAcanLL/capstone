import React from "react";
import { observable } from "mobx";

export const RootStoreContext = React.createContext(null);

const RootStore = () => {
  const store = observable({
    get state() {
      // TODO: derive application state from router
      return "START";
    },
  });
  return store;
};

export default RootStore;
