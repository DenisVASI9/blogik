import React, { useEffect } from "react";
import {IArticlesController} from "./interfaces";
import {useRecoilValue} from "recoil";
import {articlesSelector} from "../../state/articles.state";

export const ArticlesController: IArticlesController = (props) => {

    const {View} = props

    const articles = useRecoilValue(articlesSelector);

    useEffect(() => {
        window.onscroll = function() {
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
                alert('123')
            }
        };

        return () => {
            window.onscroll = null;
        };
    }, []);

    return <View articles={articles}/>
}
