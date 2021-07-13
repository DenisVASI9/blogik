import React from "react";
import {INewArticle, INewArticleProps} from "../controllers/new-article/interfaces";
import {createComponent} from "../lib/components";
import {NewArticleController} from "../controllers/new-article/new-article.controller";
import {ArticleEditorView} from "../views/article-editor/article-editor.view";

export const NewArticle: React.FC<INewArticle> = (props) => createComponent<INewArticleProps, INewArticle>(NewArticleController, ArticleEditorView, props)