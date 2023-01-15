import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";

import { useMyList, UseMyListType } from "./useCase/useMyList";

import "./index.css";

export const UseMyListContext = createContext({} as UseMyListType);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>

  <UseMyListContext.Provider value={useMyList()}>
    <App></App>
  </UseMyListContext.Provider>

  // </React.StrictMode>,
);
