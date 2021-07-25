import { IArticleController } from "./interfaces";
import { useRecoilValue } from "recoil";
import { articleSelector, articleTextSelector } from "../../state/articles.state";
import { useParams } from "react-router";
import marked from "../../lib/marked";
import { useEffect } from "react";

export const ArticleController: IArticleController = (props) => {
  const { View } = props;

  const { id } = useParams<{ id: string }>();
  const article = useRecoilValue(articleSelector(id));
  const articleText = useRecoilValue(articleTextSelector(article?.article));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <View text={marked(articleText)} title={article?.title} />;
};
