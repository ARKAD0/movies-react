const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjE5Mjc1MTc2NDY3ZjQ4ODA4NDMwOTFkMTU2YWJjMiIsInN1YiI6IjYyZDM5MjIxZDQ2NTM3MDA1NWY3Mzc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cj--5T2zZSoIN4zi7ZeaAismeFT08c4eI8mmtiPg_i8",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json());
}