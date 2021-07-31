import {Controller} from "../../lib/components/interfaces";
import {IArticlesResponse} from "../../services/articles/interfaces";

export interface IArticlesProps {
    articles: IArticlesResponse
}

export interface IArticles {

}

export type IArticlesController = Controller<IArticlesProps, IArticles>;
