import {createComponent} from "../lib/components";
import {ArticleController} from "../controllers/article/article.controller";
import {ArticleView} from "../views/article/article.view";
import {IArticle, IArticleProps} from "../controllers/article/interfaces";
import React from "react";

export const Article: React.FC<IArticle> = (props) => createComponent<IArticleProps, IArticle>(ArticleController, ArticleView, props);