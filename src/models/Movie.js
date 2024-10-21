export class Movie {
  id;
  title;
  imgURL;
  videoURL;
  isTopRated;
  isRecentlyAdded;

  constructor(id, title, imgURL, videoURL, isTopRated, isRecentlyAdded) {
    this.id = id;
    this.title = title;
    this.imgURL = imgURL;
    this.videoURL = videoURL;
    this.isTopRated = isTopRated;
    this.isRecentlyAdded = isRecentlyAdded;
  }
}






