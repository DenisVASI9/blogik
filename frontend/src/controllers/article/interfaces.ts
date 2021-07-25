import {Controller} from "../../lib/components/interfaces";

export interface IArticleParams {
    text: string
}

export interface IArticleActions {

}

export type IArticleProps = IArticleParams & IArticleActions

export interface IArticle {

}

export type IArticleController = Controller<IArticleProps, IArticle>;
