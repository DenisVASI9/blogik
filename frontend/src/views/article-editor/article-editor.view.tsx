import React from "react";
import {INewArticleProps} from "../../controllers/new-article/interfaces";
import "./style.scss"

export const ArticleEditorView: React.FC<INewArticleProps> = (props) => <section className="article-editor">
    <form className="article-editor__form" onSubmit={props.handleSubmit(props.onSubmit)}>
        <input defaultValue="Заголовок"
               className="article-editor__title"  {...props.register("title", {required: true})}/>
        <textarea defaultValue="Описание"
                  className="article-editor__area" {...props.register("description", {required: true})}/>
        <input type="file" className="article-editor__file" {...props.register("article", {required: true})} />
        <div className="article-editor__actions">
            <input type="submit"/>
        </div>
    </form>
</section>