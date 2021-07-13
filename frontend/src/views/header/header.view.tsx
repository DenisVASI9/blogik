import "./style.scss"
import React from "react";
import {IHeaderProps} from "../../controllers/header/interfaces";

export const HeaderView: React.FC<IHeaderProps> = (props) => {
    return <header className="header">
        <div className="header__logo" onClick={props.goToHome}>
            office 28
            <span className="header__logo-small">Knowledge base</span>
        </div>
        <div id="header__menu"/>
    </header>
}