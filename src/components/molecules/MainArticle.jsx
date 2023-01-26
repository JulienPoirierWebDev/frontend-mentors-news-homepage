import {Button} from "../atoms/Button";
import {Image} from "../atoms/Image";
import {Typography} from "../atoms/Typography";
import {Title} from "../atoms/Title";

export const MainArticle = ({article}) => {
    return (
        <>
            <Image/>
            <Title title={article.title} size="large" variant={"1"} width={"3/5"}/>
            <Typography content={article.content}/>
            <Button content={"Read more"}/>
        </>
    )
}
