import HeroImage from "../UI Components/HeroImage";
import InfoSection from "../UI Components/InfoSection";
import Separator from "../UI Components/Separator";
import SideBar from "../UI Components/SideBar";

export default function Home() {

    return (
        <>
            <section>
                <HeroImage />
                <Separator topColor={"#f9b576"} bottomColor={"black"} />
                <section className="home">
                    <div>
                        <SideBar />
                    </div>
                    <InfoSection
                        title="Your Driveline Solutions Provider"
                        topText="For 42 years, PowerTrain Industries has been the leading name in driveline manufacturing, specializing in crafting high-quality driveline parts that are notoriously hard to find. From iconic classics like the Mercury Capri and Nissan 300ZX to beloved favorites such as the Mazda Miata, Audi Quattro, and Volvo V70, we cater to the needs of discerning enthusiasts and restoration projects alike."
                        topImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carid.com%2Fimages%2Fpages%2Fdriveline-axles%2Faxle-assembly.jpg&f=1&nofb=1&ipt=36e0f624663709ae27ead011ff17429968e1a451471fe28f6a954cb8824d0604&ipo=images"
                        separatorColorTop="#fcc48f"
                        bottomText="Our expertise extends beyond the ordinary, with a dedication to producing rare parts like 26/27 spline components and CV yokes. At PowerTrain Industries, we're not just about meeting expectations; we're about exceeding them, ensuring that your driveline needs are not only met but surpassed with precision and excellence."
                        bottomImage="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.carid.com%2Fimages%2Fpages%2Freplacement-driveshafts%2Fdriveshaft-3.jpg&f=1&nofb=1&ipt=5952ddf6c55a49774dbb0fd03f1c97988e08db465151c0c054bcc66c669d33c3&ipo=images"
                        separatorColorBottom='grey'
                        empasisText="Discover why enthusiasts and professionals alike trust PowerTrain Industries for their most elusive driveline requirements. Join us on the road to performance and reliability."
                    />
                </section>
            </section>
        </>
    )
}