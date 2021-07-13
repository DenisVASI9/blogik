import {IHeaderController} from "./interfaces";
import {useHistory} from "react-router-dom";

export const HeaderController: IHeaderController = (props) => {
    const {View} = props

    const history = useHistory()

    function goToHome() {
        history.push('/')
    }

    return <View goToHome={goToHome}/>
}