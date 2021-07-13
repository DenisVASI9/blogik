import {Controller} from "../../lib/components/interfaces";

export interface IArticlePreviewParams {
    title: string
    description: string
    createdAt: string
    id: number
}

export interface IArticlePreviewActions {
    goToArticle(): void
}

export type IArticlePreviewProps = IArticlePreviewParams & IArticlePreviewActions

export interface IArticlePreview {
    title: string
    description: string
    article: string
    created_at: number
    id: number
}

export type IArticlePreviewController = Controller<IArticlePreviewProps, IArticlePreview>;
