import {IArticlesResponse, NewArticle} from "./interfaces";

export class ArticlesService {
    static async getByPage(page: number = 1): Promise<IArticlesResponse> {
        const uri = `http://localhost:3000/articles/${page}`
        return fetch(uri).then(res => res.json())
    }

    static async getArticleText(path: string): Promise<string> {
        if (!path) {
            throw new Error("path must be a string")
        }
        const uri = `http://localhost:3000/articles/${path}`
        return fetch(uri).then(res => res.text())
    }

    static async createArticle(article: NewArticle) {

        const body = new FormData()
        body.append("title", article.title)
        body.append("description", article.description)
        body.append("article", article.article[0])

        const uri = "http://localhost:3000/articles/create"
        return fetch(uri, {
            method: "POST",
            body
        })
    }
}
