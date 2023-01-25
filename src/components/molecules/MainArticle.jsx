import {Button} from "../atoms/Button";
import {Image} from "../atoms/Image";
import {Typography} from "../atoms/Typography";
import {H1} from "../atoms/H1";

export const MainArticle = ({article}) => {
    return (
        <>
            <Image/>
            <H1 title={article.title}/>
            <Typography content={article.content}/>
            <Typography content={"Blablablalvba"}/>
            <Button content={"Read more"}/>

        </>
    )
}
