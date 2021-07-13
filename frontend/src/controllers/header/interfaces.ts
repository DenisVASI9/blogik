import {Controller} from "../../lib/components/interfaces";

export interface IHeaderParams {

}

export interface IHeaderActions {
    goToHome(): void
}

export type IHeaderProps = IHeaderParams & IHeaderActions

export interface IHeader {

}

export type IHeaderController = Controller<IHeaderProps, IHeader>;