import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div style={{ background: "#111", color: "white", padding: "20px" }}>
      <h1 style={{ color: "red" }}>NETFLIX</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.image} width="200" alt="" />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
