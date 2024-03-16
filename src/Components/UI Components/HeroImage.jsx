import { Image } from "@nextui-org/react";
import hero from "../../Images/Homepage/hero-image.webp"

export default function HeroImage() {
    
    return(
        <>
        <section className="hero-image">
            <Image
            alt="PowerTrain Industries Hero Image"
            src={hero}
            radius="none"
            />
        </section>
        </>
    )
}