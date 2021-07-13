import { MainLayout } from "../../layout/main";
import "./style.scss"
import {Article} from "../../components/article";

export const ArticlePage = () => <MainLayout>
    <div className="article-page">
        <div className="article-page__container">
            <Article />
        </div>
    </div>
</MainLayout>