import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const LazyAbout = React.lazy(() => import("./About"));
function App() {
  return (
    <>
      <h1>fdsfkj</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
