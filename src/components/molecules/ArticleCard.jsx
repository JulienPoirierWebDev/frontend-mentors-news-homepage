import React from 'react';
import {Image} from "../atoms/Image";
import {Typography} from "../atoms/Typography";
import {Title} from "../atoms/Title";

const ArticleCard = ({article}) => {
    return (
        <div className={"w-96 flex mt-6 mr-8 h-40"}>
            <div className={"shrink-0 w-28"}>
                <Image type="secondary" src={article.image} alt={"blabla"}/>
            </div>
            <div className={"w-auto flex flex-col ml-4"}>
                <Typography content={article.number} type={"number"}/>
                <Title size={"small"} variant={"2"} title={article.title}/>
                <Typography content={article.content}/>
            </div>
        </div>
    );
};

export default ArticleCard;
