import React from "react";
import {IArticles, IArticlesProps} from "../controllers/articles/interfaces";
import {createComponent} from "../lib/components";
import {ArticlesController} from "../controllers/articles/articles.controller";
import {ArticlesView} from "../views/articles/articles.view";

// TODO: <Пропсы View, Пропсы Контроллера>
export const Articles: React.FC<IArticles> = (props) => createComponent<IArticlesProps, IArticles>(ArticlesController, ArticlesView, props);