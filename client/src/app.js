import React from 'react';
import { getMovies } from './controller/movie-controller/movie-controller';
import CssBaseline from '@material-ui/core/CssBaseline';
import StartScreen from './view/start-screen/start-screen';
import MovieScreen from './view/movie-screen/movie-screen';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    }
  }

  grabPopcorn = async (year, event) => {
    event.preventDefault();
    const movies = await getMovies(year);
    this.setState({ movies });
  };
  
  render() {

    const { movies } = this.state;
    let component;

    if (movies) {
      component = <MovieScreen movies={movies} />;
    } else {
      component = <StartScreen onSelection={this.grabPopcorn} />;
    }

    return (
      <main>
        <CssBaseline />
        { component }
      </main>
      
    );

  }
}