import React from 'react';
import { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {
  const mo = getMovies();
  const [movies, setMovies] = useState(mo);
  console.log(movies);

  const handleDelete = (id) => {
    console.log(id);
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  if (movies.length < 1) {
    return <p>There are no movies in the database</p>;
  }

  return (
    <>
      <p>Number of movies in {movies.length}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Stars</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.stars}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
