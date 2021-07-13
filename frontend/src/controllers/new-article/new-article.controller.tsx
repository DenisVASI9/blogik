import {INewArticleController} from "./interfaces";
import {useForm} from "react-hook-form";
import {ArticlesService} from "../../services/articles/articles.service";
import {NewArticle} from "../../services/articles/interfaces";

export const NewArticleController: INewArticleController = (props) => {
    const {View} = props

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: NewArticle) => ArticlesService.createArticle(data)

    return <View
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
    />
}