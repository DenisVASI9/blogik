import React from "react";
import {IArticlePreviewController} from "./interfaces";
import {useHistory} from "react-router-dom";
import marked from "../../lib/marked";

export const ArticlePreviewController: IArticlePreviewController = (props) => {
    const {View, ...oth} = props

    let history = useHistory();

    function goToArticle(): void {
        history.push(`/article/${props.id}`)
    }

    const decodedDate = new Date(props.created_at)
    const createdAt = `${decodedDate.getDay()}-${decodedDate.getMonth()}-${decodedDate.getFullYear()}`

    return <View
        {...oth}
        description={marked(oth.description)}
        createdAt={createdAt}
        goToArticle={goToArticle}
    />
}