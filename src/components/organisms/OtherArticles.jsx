import React from 'react';
import ArticleCard from "../molecules/ArticleCard";

const OtherArticles = ({others}) => {
    return (
        <div className=" grid justify-items-stretch lg:grid-cols-2 xl:grid-cols-3 grid-cols-1  mt-10">
            {others.map((article) => {
                return (
                    <ArticleCard key={article.number} article={article}/>
                )
            })}
        </div>
    );
};

export default OtherArticles;
