import logo from "./logo.svg";
import "./App.css";
import RootStore, { RootStoreContext } from "./store/Store";
import { observer, useLocalStore } from "mobx-react";

function App() {
  const rootStore = useLocalStore(RootStore);
  return observer(
    <RootStoreContext.Provider value={{ rootStore }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>App State: {rootStore.state}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
