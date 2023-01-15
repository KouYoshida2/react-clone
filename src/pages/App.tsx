import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Review } from "./Review";
import { MyList } from "./MyList";
import { TheHeader } from "../components/TheHeader";

export const App = () => {
  return (
    <div className="App bg-gray-800">
      <BrowserRouter>
        <TheHeader></TheHeader>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/my-list" element={<MyList></MyList>} />
          <Route path="/review-list" element={<Review></Review>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
