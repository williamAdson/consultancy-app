import Image from "next/image";

export default function ImageLoader({imageSrc, imageAlt}){
    return (
        <div>
            <Image src={imageSrc} alt={imageAlt} />
        </div>
    )
}