export class Movie {
  constructor(
    public id: number,
    public releaseDate: string,
    public title: string,
    public imgUrl: string,
    public overview: string,
    public genres: number[]
  ) {}
}

export class MovieBuilder {
  private _id: Movie["id"] = 0;
  private _releaseDate: Movie["releaseDate"] = "";
  private _title: Movie["title"] = "";
  private _imgUrl: Movie["imgUrl"] = "";
  private _overview: Movie["overview"] = "";
  private _genres: Movie["genres"] = [];

  public withId = (id: Movie["id"]) => {
    this._id = id;
    return this;
  };

  public withReleaseDate = (releaseDate: Movie["releaseDate"]) => {
    this._releaseDate = releaseDate;
    return this;
  };

  public withTitle = (title: Movie["title"]) => {
    this._title = title;
    return this;
  };

  public withImgUrl = (imgUrl: Movie["imgUrl"]) => {
    this._imgUrl = imgUrl;
    return this;
  };

  public withOverview = (overview: Movie["overview"]) => {
    this._overview = overview;
    return this;
  };

  public withGenres = (genres: Movie["genres"]) => {
    this._genres = genres;
    return this;
  };

  public build = () => {
    return new Movie(
      this._id,
      this._releaseDate,
      this._title,
      this._imgUrl,
      this._overview,
      this._genres
    );
  };
}
