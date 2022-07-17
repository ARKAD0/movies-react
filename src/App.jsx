// import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { Link, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage,  } from "./pages/LandingPage";

export function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails/>}/>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
      </main>
    </div>
  );
}
