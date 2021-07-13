import {Header} from "../../components/header";
import "./style.scss"
import React from "react";

export const MainLayout: React.FC = (props) => {
    return <div className="main-layout">
        <Header/>
        {props.children}
    </div>
}
