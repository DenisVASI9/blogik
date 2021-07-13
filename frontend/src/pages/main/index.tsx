import {MainLayout} from "../../layout/main";
import {Articles} from "../../components/articles";
import "./style.scss"

export const MainPage = () => <MainLayout>
    <div className="main-page">
        <div className="main-page__articles-container">
            <Articles/>
        </div>
    </div>
</MainLayout>