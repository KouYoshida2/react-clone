import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Review } from "./pages/Review";
import { MyList } from "./pages/MyList";
import { Errors } from "./pages/Errors";

import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/my-list" element={<Review></Review>} />
      <Route path="/review-list" element={<MyList></MyList>} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
);
