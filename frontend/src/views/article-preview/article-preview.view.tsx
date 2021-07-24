import React from "react";
import {IArticlePreviewProps, IArticlePreviewActions} from "../../controllers/article-preview/interfaces";
import "./style.scss"

export const ArticlePreviewView: React.FC<IArticlePreviewProps & IArticlePreviewActions> = (props) => {
    return <article className="article-preview" onClick={() => props.goToArticle()}>
        <div className="article-preview__title">
            <h2>{props.title}</h2>
        </div>
        <div className="article-preview__date">
            Опубликовано: {props.createdAt}
        </div>
        <div className="article-preview__description" dangerouslySetInnerHTML={{__html: props.description}}/>
    </article>
}
