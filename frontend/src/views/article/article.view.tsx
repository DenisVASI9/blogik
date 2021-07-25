import "./style.scss"
import React from "react";
import {IArticleProps} from "../../controllers/article/interfaces";

export const ArticleView: React.FC<IArticleProps> = (props) => <section className="article">
    <div className="article__container" dangerouslySetInnerHTML={{__html: props.text}}/>
</section>
