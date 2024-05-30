import Image from "next/image";

export function Logo(){
    return (
        <Image src='/logo.svg' width={200} height={80} alt='SoYoung' />
    )
}
