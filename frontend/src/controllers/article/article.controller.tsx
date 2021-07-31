import { IArticleController } from "./interfaces";
import { useRecoilValue } from "recoil";
import { articleByIdSelector } from "../../state/articles.state";
import { useParams } from "react-router";
import marked from "../../lib/marked";
import { useEffect } from "react";

export const ArticleController: IArticleController = (props) => {
  const { View } = props;

  const { id } = useParams<{ id: string }>();
  const articleById = useRecoilValue(articleByIdSelector(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <View text={marked("### articleById")} />;
};
