import {Controller} from "../../lib/components/interfaces";
import {UseFormRegister, UseFormHandleSubmit} from "react-hook-form";
import {NewArticle} from "../../services/articles/interfaces";

export interface INewArticleParams {
    register: UseFormRegister<any>
    handleSubmit: UseFormHandleSubmit<any>
    onSubmit: (data: NewArticle) => void
}

export interface INewArticleActions {

}

export type INewArticleProps = INewArticleParams & INewArticleActions

export interface INewArticle {

}

export type INewArticleController = Controller<INewArticleProps, INewArticle>;
