import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/detail" element={<MovieDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
