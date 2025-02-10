import React from 'react';

const MoviesList = ({ movies, onReserve, reservedMovies }) => {
    return (
        <div>
            <div className="movies-container">
                {movies.map((movie) => {
                    const isReserved = reservedMovies.includes(movie.id);

                    return (
                        <div key={movie.id} className="movie-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-img"
                            />
                            <div className="movie-overlay">
                                <h3>{movie.title}</h3>
                                <p> Sortie : <strong>{movie.release_date}</strong></p>
                                <p> Note : <strong>{movie.vote_average}/10</strong></p>
                                <button
                                    className={`reserve-btn ${isReserved ? 'disabled' : ''}`}
                                    onClick={() => !isReserved && onReserve(movie.id, movie.title)}
                                    disabled={isReserved}
                                >
                                    {isReserved ? 'Réservé' : 'Réserver'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MoviesList;
