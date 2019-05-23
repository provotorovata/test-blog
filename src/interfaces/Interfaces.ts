export interface tag {
  id: string;
  title: string;
  isActive: number;
}

export interface post {
  id: string;
  title: string;
  text: string;
  isActive: number;
  creationDate: Date;
  comments: Array<string>;
  titleImage: string;
  images: Array<string>;
  tags: Array<string>;
}
