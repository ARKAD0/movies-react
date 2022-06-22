import { Moviecard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid(){
    console.log(styles)
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
            <Moviecard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}