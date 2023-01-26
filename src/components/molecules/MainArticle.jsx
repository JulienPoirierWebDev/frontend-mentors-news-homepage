import {Button} from "../atoms/Button";
import {Image} from "../atoms/Image";
import {Typography} from "../atoms/Typography";
import {Title} from "../atoms/Title";

export const MainArticle = ({article}) => {
    return (
        <>
            <Image type="primary" src="image-web-3-mobile.jpg"/>
            <Title title={article.title} size="large" variant={"1"} width={"3/5"}/>
            <Typography content={article.content}/>
            <Button content={"Read more"}/>
        </>
    )
}
