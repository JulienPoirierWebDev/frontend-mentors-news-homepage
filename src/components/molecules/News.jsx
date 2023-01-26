import {Typography} from "../atoms/Typography";

export const News = ({news}) => {
    return (
        <div className={"py-6"}>
            <h2 className={"text-xl font-[Inter-Bold] mb-2 text-white"}>{news.title}</h2>
            <Typography content={news.content} type="secondary"/>
        </div>
    )
}
