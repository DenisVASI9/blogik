import React, { useEffect, useLayoutEffect, useState } from "react";
import { IArticlesController } from "./interfaces";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articlesAtom } from "../../state/articles.state";
import { ArticlesService } from "../../services/articles/articles.service";

export const ArticlesController: IArticlesController = (props) => {

  const { View } = props;

  const articles = useRecoilValue(articlesAtom);
  const setArticles = useSetRecoilState(articlesAtom);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (articles.next) {
      ArticlesService.getByPageSafe(page).then((either) => {
        console.log(either);
      })
    }
  }, [page]);

  useLayoutEffect(() => {
    const listener = () => {
      if ((window.innerHeight + window.pageYOffset >= document.body.offsetHeight) && articles.next) {
        setPage((page) => page + 1);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return <View articles={articles} />;
};
