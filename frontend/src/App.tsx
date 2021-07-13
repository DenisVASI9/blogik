import React from 'react';
import {
    Route, BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import {MainPage} from "./pages/main";
import {ArticlePage} from "./pages/article";
import {ArticleEditorPage} from "./pages/article-editor";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route exact path="/article/new">
                    <ArticleEditorPage />
                </Route>
                <Route exact path="/article/:id">
                    <ArticlePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
