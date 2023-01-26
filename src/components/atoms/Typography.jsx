import clsx from "clsx";

export const Typography = ({content, type}) => {
    const style = clsx({
        "font-[Inter-Regular] pt-2" : true,
        "text-[#fffdfa]":type === "secondary"
    })

    return (
        <p className={style}>{content}</p>
    )
}
