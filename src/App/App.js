import "./App.css";
import { Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieList from "../components/MovieList";
import ResponsiveAppBar from "../components/NavBar";
import AboutPage from "../pages/aboutPage";
import PageNotFound from "../pages/pageNotFound";
import MovieDetails from "../components/MovieDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MovieList></MovieList>}></Route>
          <Route path="/movies/:id" element={<MovieDetails></MovieDetails>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
