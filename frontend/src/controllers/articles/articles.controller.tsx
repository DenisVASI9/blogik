import React from "react";
import {IArticlesController} from "./interfaces";
import {useRecoilValue} from "recoil";
import {articlesSelector} from "../../state/articles.state";

export const ArticlesController: IArticlesController = (props) => {

    const {View} = props

    const articles = useRecoilValue(articlesSelector);

    return <View articles={articles}/>
}