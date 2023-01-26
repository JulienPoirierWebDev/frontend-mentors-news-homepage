import clsx from "clsx";

export const Image = ({type, src, alt}) => {

    const style = clsx({
        "aspect-square box-border w-full" : type === "primary",
        "h-full w-auto": type === "secondary"
    })

    return (
        <img className={style} src={`/src/assets/images/${src}`} alt={alt}/>
    )

}
