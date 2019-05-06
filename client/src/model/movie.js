export default class Movie {

  constructor(title, rating, duration, thumbnail, summary, genres, country, imdbUrl, trailerUrl) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
    this.thumbnail = thumbnail;
    this.summary = summary;
    this.genres = genres;
    this.country = country;
    this.imdbUrl = imdbUrl;
    this.trailerUrl = trailerUrl;
  }

  static fromJSON(jsonData) {  
    return new Movie(
      jsonData.title,
      jsonData.rating,
      jsonData.duration,
      jsonData.thumbnail,
      jsonData.summary,
      jsonData.genres,
      jsonData.country,
      jsonData.imdbUrl,
      jsonData.trailerUrl
    );
  }

}