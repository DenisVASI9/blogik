import {MainLayout} from "../../layout/main";
import {NewArticle} from "../../components/new-article";
import "./style.scss"

export const ArticleEditorPage = () => <MainLayout>
    <div className="article-editor-page">
        <div className="article-editor-page__container">
            <NewArticle/>
        </div>
    </div>
</MainLayout>
