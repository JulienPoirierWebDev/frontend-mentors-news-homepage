import clsx from "clsx";

export const Typography = ({content, type}) => {
    const style = clsx({
        "font-[Inter-Regular] pt-2" : type !== "number",
        "text-[#fffdfa]":type === "secondary",
        "font-[Inter-ExtraBold] text-4xl text-[#5d5f79]": type ==="number"
    })

    return (
        <p className={style}>{content}</p>
    )
}
