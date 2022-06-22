import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";

// import { MovieDetails } from "./pages/MovieDetails";
// import { LandingPage,  } from "./pages/LandingPage";

export function App() {
  return (
    <div>
      <header>
        
          <h1 className={styles.title}>Movies</h1>
        
      </header>
      <main>
        <MoviesGrid/>
      </main>
    </div>
  );
}
