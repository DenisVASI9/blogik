import React from "react";
import {Controller} from "./interfaces";

export function createComponent<ViewProps, ControllerProps>(Controller: Controller<ViewProps, ControllerProps>, View: React.FC<ViewProps>, props: ControllerProps) {
    return <Controller View={View} {...props}/>
}