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
