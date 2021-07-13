import React from "react";
import {IHeader, IHeaderProps} from "../controllers/header/interfaces";
import {createComponent} from "../lib/components";
import {HeaderController} from "../controllers/header/header.controller";
import {HeaderView} from "../views/header/header.view";

export const Header: React.FC<IHeader> = (props) => createComponent<IHeaderProps, IHeader>(HeaderController, HeaderView, props)