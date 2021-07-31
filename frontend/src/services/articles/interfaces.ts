import * as io from "io-ts";

// **********************
// Article types
// **********************
const ArticleCodec = io.type({
  id: io.number,
  title: io.string,
  description: io.string,
  created_at: io.number,
  article: io.string
});

export const ArticleArrayCodec = io.array(ArticleCodec);

export type IArticle = io.TypeOf<typeof ArticleCodec>;
// **********************
// Article types
// **********************

// **********************
// Articles types
// **********************
export const ArticlesCodec = io.type({
  data: ArticleArrayCodec,
  count: io.number,
  next: io.boolean
})

export type IArticlesResponse = io.TypeOf<typeof ArticlesCodec>;
// **********************
// Articles types
// **********************

export interface NewArticle {
  title: string
  description: string
  article: FileList
}
