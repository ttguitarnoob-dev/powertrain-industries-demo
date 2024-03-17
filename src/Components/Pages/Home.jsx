import HeroImage from "../UI Components/HeroImage";
import Separator from "../UI Components/Separator";
import SideBar from "../UI Components/SideBar";

export default function Home() {

    return(
        <>
        <section>
            <HeroImage />
            <Separator color={"black"} />
            <SideBar />
        </section>
        </>
    )
}