import HeroImage from "../UI Components/HeroImage";
import InfoSection from "../UI Components/InfoSection";
import Separator from "../UI Components/Separator";
import SideBar from "../UI Components/SideBar";

export default function Home() {

    return(
        <>
        <section>
            <HeroImage />
            <Separator color={"black"} />
            <section className="home">
                <div>
                    <SideBar />
                </div>
                <InfoSection />
            </section>
        </section>
        </>
    )
}