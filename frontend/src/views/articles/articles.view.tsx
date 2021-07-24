import React, {Suspense} from "react";
import {IArticlesProps} from "../../controllers/articles/interfaces";
import {ArticlePreview} from "../../components/article-preview";
import "./style.scss"

export const ArticlesView: React.FC<IArticlesProps> = (props) => {
    return <Suspense fallback="1234123">
        <section className="articles">
            {props.articles.data.map((article, key) => <ArticlePreview {...article} key={key}/>)}
        </section>
    </Suspense>
}
