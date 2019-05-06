import Movie from '../../model/movie';

/**
 * @returns {Movie[]}
 */
export async function getMovies(year) {

  const url =`/movies/${year}`;
  const response = await fetch(url);
  const json = await response.json();

  return json.map(Movie.fromJSON);
}