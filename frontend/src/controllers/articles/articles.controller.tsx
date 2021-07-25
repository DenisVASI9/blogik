import React, { useLayoutEffect } from "react";
import {IArticlesController} from "./interfaces";
import {useRecoilValue} from "recoil";
import {articlesSelector} from "../../state/articles.state";

export const ArticlesController: IArticlesController = (props) => {

    const {View} = props

    const articles = useRecoilValue(articlesSelector);

    useLayoutEffect(() => {
        const listener = () => {
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
                alert("123");
            }
        }

        window.addEventListener('scroll', listener)

        return () => {
            console.log('umount')
            window.removeEventListener('scroll', listener)
        };
    }, []);

    return <View articles={articles}/>
}
