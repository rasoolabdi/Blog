import Image from "next/image";

function Avatar({ width = 24 , height = 24 , src }) {
    return (
        <Image
            src={src || "/images/avatar.png"}
            width={width}
            height={height}
            className="rounded-full ring-1 ring-secondary-300 ml-1"
            alt={src}
        />
    )
};
export default Avatar;