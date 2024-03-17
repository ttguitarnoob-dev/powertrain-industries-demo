import { Image } from "@nextui-org/react";
import Separator from "./Separator";

export default function InfoSection() {

    return (
        <>
            <div className="ml-4">
                <h2 className="text-5xl">Your Driveline Solutions Provider</h2>
                <div className="flex flex-wrap">
                <p className="text-left mt-4 max-w-lg p-1">For 42 years, PowerTrain Industries has been the leading name in driveline manufacturing, specializing in crafting high-quality driveline parts that are notoriously hard to find. From iconic classics like the Mercury Capri and Nissan 300ZX to beloved favorites such as the Mazda Miata, Audi Quattro, and Volvo V70, we cater to the needs of discerning enthusiasts and restoration projects alike.</p>
                <Image
                    width={300}
                    className="m-2"
                    alt="Card example background"
                    src="https://picsum.photos/400/300"
                />
                </div>
                <Separator color={'grey'} />
                <div className="flex flex-wrap">
                <Image
                    className="m-2"
                    width={300}
                    alt="Card example background"
                    src="https://picsum.photos/500/300"
                />
                <p className="text-left m-4 max-w-lg p-1">Our expertise extends beyond the ordinary, with a dedication to producing rare parts like 26/27 spline components and CV yokes. At PowerTrain Industries, we're not just about meeting expectations; we're about exceeding them, ensuring that your driveline needs are not only met but surpassed with precision and excellence.</p>
                </div>
            </div>
        </>
    )
}