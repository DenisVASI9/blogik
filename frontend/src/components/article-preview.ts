import {createComponent} from "../lib/components";
import {ArticlePreviewController} from "../controllers/article-preview/article-preview.controller";
import {ArticlePreviewView} from "../views/article-preview/article-preview.view";
import {IArticlePreview, IArticlePreviewProps} from "../controllers/article-preview/interfaces";
import React from "react";

export const ArticlePreview: React.FC<IArticlePreview> = (props) => createComponent<IArticlePreviewProps, IArticlePreview>(ArticlePreviewController, ArticlePreviewView, props);