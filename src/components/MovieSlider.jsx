import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const MovieSlider = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_KEY = '99ee296b508f51226de7bf05c5584a8e';
  const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(MOVIE_API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container my-4">
      <div className="row flex-row flex-nowrap overflow-auto">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="col-4 col-md-3 col-lg-2 p-2"
            onClick={() => handleMovieClick(movie)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card h-100 movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top movie-card-img"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered size='sm'> 
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie?.poster_path}`}
            alt={selectedMovie?.title}
            className="img-fluid"
          />
          <p>{selectedMovie?.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieSlider;
