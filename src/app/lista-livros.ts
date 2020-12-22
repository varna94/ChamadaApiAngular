export interface livro {
  books: books[];
}
export interface books {
  id: string;
  title: string;
  shelf: string;
  authors: [];
  imageLinks: imageLinks;
}
export interface imageLinks {
  smallThumbnail: string;
  thumbnail: string;
}


