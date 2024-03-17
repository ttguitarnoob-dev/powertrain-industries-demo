import { Image } from "@nextui-org/react";
import Separator from "./Separator";

export default function InfoSection() {

    return (
        <>
            <div className="info-section ml-4">
                <h2 className="text-5xl text-left">Your Driveline Solutions Provider</h2>
                <div className="flex flex-wrap">
                <p className="text-left mt-4 max-w-lg p-1">For 42 years, PowerTrain Industries has been the leading name in driveline manufacturing, specializing in crafting high-quality driveline parts that are notoriously hard to find. From iconic classics like the Mercury Capri and Nissan 300ZX to beloved favorites such as the Mazda Miata, Audi Quattro, and Volvo V70, we cater to the needs of discerning enthusiasts and restoration projects alike.</p>
                <Image
                    width={300}
                    className="m-2"
                    alt="Card example background"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carid.com%2Fimages%2Fpages%2Fdriveline-axles%2Faxle-assembly.jpg&f=1&nofb=1&ipt=36e0f624663709ae27ead011ff17429968e1a451471fe28f6a954cb8824d0604&ipo=images"
                />
                </div>
                <Separator color={'grey'} />
                <div className="flex flex-wrap">
                <Image
                    className="m-2"
                    width={300}
                    alt="Card example background"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.carid.com%2Fimages%2Fpages%2Freplacement-driveshafts%2Fdriveshaft-3.jpg&f=1&nofb=1&ipt=5952ddf6c55a49774dbb0fd03f1c97988e08db465151c0c054bcc66c669d33c3&ipo=images"
                />
                <p className="text-left m-4 max-w-lg p-1">Our expertise extends beyond the ordinary, with a dedication to producing rare parts like 26/27 spline components and CV yokes. At PowerTrain Industries, we're not just about meeting expectations; we're about exceeding them, ensuring that your driveline needs are not only met but surpassed with precision and excellence.</p>
                </div>
                <div>
                    <p className="text-left font-bold mt-4 p-1">Discover why enthusiasts and professionals alike trust PowerTrain Industries for their most elusive driveline requirements. Join us on the road to performance and reliability.</p>
                </div>
            </div>
        </>
    )
}