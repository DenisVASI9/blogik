import { selector, selectorFamily } from "recoil";
import {ArticlesService} from "../services/articles/articles.service";

export const articlesSelector = selector({
    key: "articles",
    get: async () => {
        return await ArticlesService.getByPage()
    }
})

export const articleSelector = selectorFamily({
    key: "article",
    get: (articleId: string) => ({get}) => {
        const articles = get(articlesSelector)
        return articles.data.find((article) => article.id === parseInt(articleId))
    }
})

export const articleTextSelector = selectorFamily({
    key: "articleText",
    get: (articlePath?: string) => async () => {

        if (!articlePath) {
            throw new Error("article path must be a string")
        }

        return await ArticlesService.getArticleText(articlePath)
    }
})

export const articleByIdSelector = selectorFamily({
    key: "articleText",
    get: (id: string) => async () => {

        if (!id) {
            throw new Error("article path must be a string")
        }

        return await ArticlesService.getArticleById(id)
    }
})
