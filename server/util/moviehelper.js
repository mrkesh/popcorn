const cheerio = require('cheerio');
const rp = require('request-promise');

const BASE_IMDB_URL = 'https://www.imdb.com';

async function getMoviesByYear(year) {

  const url = `${BASE_IMDB_URL}/search/title?title_type=feature,documentary&release_date=${year}-01-01,${year}-12-31&user_rating=6.0,&sort=num_votes,desc`;
  const html = await rp(url);
    
  let $ = cheerio.load(html);
  let movies = [];

  $('.lister-item.mode-advanced').each(async function(listItem) {
    
    const node = $(this);

    const title = node.find('.lister-item-header a').text().trim();
    const rating = parseFloat(node.find('.inline-block.ratings-imdb-rating strong').text().trim(), 10);
    const summary = node.find('p.text-muted').eq(1).text().trim();
    const thumbnail = node.find('.lister-item-image img').attr('src');
    const duration = parseFloat(node.find('p.text-muted .runtime').text().trim().replace(' min', ''), 10);
    const genres = node.find('p.text-muted .genre').text().trim().split(',');
    const imdbUrl = node.find('.lister-item-header a').attr('href');
    
    movies.push({ title, rating, summary, thumbnail, duration, genres, imdbUrl });
  });

  let promises = movies.map(async function(movie) {
    
    const detailedPageHtml = await rp(`${BASE_IMDB_URL}${movie.imdbUrl}`);
    const country = $(detailedPageHtml).find('.txt-block h4:contains(Country)').siblings('a').text().trim();
    const trailerUrl = $(detailedPageHtml).find('.video_slate a').first().attr('href');
    movie.country = country;
    movie.trailerUrl = trailerUrl;
    return movie;
  });

  movies = await Promise.all(promises);

  return movies;
}

module.exports = {
  getMoviesByYear
}