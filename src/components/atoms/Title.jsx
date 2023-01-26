import clsx from "clsx";

export const Title = ({size, type, title, variant = "1", width}) => {

    function getComponent(variant) {
        switch (variant) {
            case "1":
                return 'h1';
            case "2":
                return 'h2';
            case "3":
                return 'h3';
            default:
                return variant;
        }
    }

    const Component = getComponent(variant);

    const style = clsx({
        "pt-4 font-[Inter-ExtraBold]":true,
        "text-[#e9ab53]" : type === "secondary",
        "text-5xl" : size === "large",
        "text-3xl" : size === "medium",
        "text-xl" : size === "small",
        "w-4/5" : width === "4/5"
    })

    return (
        <Component className={style}>{title}</Component>
    )
}
