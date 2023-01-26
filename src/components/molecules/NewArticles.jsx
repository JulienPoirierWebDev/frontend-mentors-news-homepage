import {Title} from "../atoms/Title";
import {News} from "./News";

export const NewArticles = ({news}) => {
    return (
        <div className={"bg-black px-6 mt-10"}>
            <Title type={"secondary"} title={"News"} size="medium"/>
            <div className="grid grid-cols-1 divide-y ">
                {news.map((oneNews) => {
                    return <News key={oneNews.title} news={oneNews}/>
                })}
            </div>

        </div>
    )
}
