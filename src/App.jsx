// App.jsx - Main application component
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './css/index.css';

const App = () => {
  // Sample movie data for week 9
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 4.5,
      genre: "Sci-Fi",
      duration: "169 min",
      image: "https://pics.filmaffinity.com/Interstellar-229339994-large.jpg",
      description: "A team of explorers travel through a wormhole in space.",
      showTimes: ["2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      id: 2,
      title: "Inception",
      rating: 4.8,
      genre: "Thriller",
      duration: "148 min",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh88PCbHm3hyphenhyphenvBtFJ0aOzeD1X15qJ8V-trbpsqbPAveXpZaetKdLhyZTFWqWUGkE6-HUOFs7c6tckJnHjVgBUwW_4haqdn599MEgFWVuibVrsCTPBP5Owyjza-9hky_75HzV3GjXh0kDlUt25kE6vjccWUwNhYlTQ7hNsLUsYPKh86EmqwO4DGzWKioNfM/s1008/critica-pelicula-origen-2010.jpg",
      description: "A skilled thief enters people's dreams to steal secrets.",
      showTimes: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"]
    },
    {
      id: 3,
      title: "The Matrix",
      rating: 4.7,
      genre: "Action",
      duration: "136 min",
      image: "https://m.media-amazon.com/images/S/pv-target-images/50c40f3c19e0edfd85792a8352dd157ec3950d3a5ab304aa5605fefd1fecbdc9._SX1080_FMjpg_.jpg",
      description: "A computer hacker learns about the true nature of reality.",
      showTimes: ["3:00 PM", "6:15 PM", "9:30 PM"]
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
