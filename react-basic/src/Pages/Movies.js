import React,{useState} from 'react';
import MovieForm from "../components/MovieForm";
import Movie from "../components/Movie";

const Movies = () => {
   const [movies, setMovies] = useState([]);
   const removeMovie = (id) => {
    setMovies(movies.filter(movie=>{ 
      return movie.id !== id;
    }));
  };
   const renderMovies = movies.length
    ? movies.map((movie) => {
        return (
          <Movie movie={movie} 
          key={movie.title} 
          removeMovie={removeMovie} />
        );
      })
   : "추가 된 영화가 없습니다.";
  const addMovie = (movie) => {
    setMovies([
      ...movies, 
      movie
    ]);
  };
  return (
    <>
       <h3> Movie List </h3> 
          <MovieForm addMovie={addMovie} /> <br />      
       {renderMovies}
    </>
  );
};

export default Movies;