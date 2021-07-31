import { atom, selectorFamily } from "recoil";
import { ArticlesService } from "../services/articles/articles.service";
import { IArticlesResponse } from "../services/articles/interfaces";
import { isLeft } from "fp-ts/Either";

export const articlesAtom = atom<IArticlesResponse>({
  key: "articles",
  default: {
    count: 0,
    next: true,
    data: []
  }
});

export const articleTextSelector = selectorFamily({
  key: "articleText",
  get: (articlePath?: string) => async () => {

    if (!articlePath) {
      throw new Error("article path must be a string");
    }

    return await ArticlesService.getArticleText(articlePath);
  }
});

export const articleByIdSelector = selectorFamily({
  key: "articleText",
  get: (id: string) => async () => {

    if (!id) {
      throw new Error("article path must be a string");
    }

    const article =  await ArticlesService.getArticleById(id);

    console.log(article);

    return article
  }
});
