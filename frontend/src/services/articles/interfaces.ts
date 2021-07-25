export interface IArticle {
    readonly id: number
    readonly title: string
    readonly description: string
    readonly created_at: number
    readonly article: string
}

export interface IArticlesResponse {
    data: IArticle[]
    count: number
    next: boolean
}

export interface NewArticle {
    title: string
    description: string
    article: FileList
}
