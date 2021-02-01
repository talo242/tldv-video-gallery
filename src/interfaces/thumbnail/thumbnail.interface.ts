interface ThumbnailSizeInfo {
  name: string;
  ext: string;
  mime: string;
  width: string;
  height: string;
  size: string;
  path: string;
  url: string;
}

interface Thumbnail {
  _id: string;
  name: string;
  url: string;
  formats: {
    thumbnail: ThumbnailSizeInfo;
    large: ThumbnailSizeInfo;
    medium: ThumbnailSizeInfo;
    small: ThumbnailSizeInfo;
  };
}

export default Thumbnail;
