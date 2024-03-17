import { Image } from "@nextui-org/react";
import Separator from "./Separator";

export default function InfoSection({ title, topText, topImage, bottomText, bottomImage, separatorColorTop, separatorColorBottom, empasisText}) {

    return (
        <>
            <div className="info-section ml-4" style={{maxHeight: "fit-content"}}>
                <h2 className="text-5xl text-left">{title}</h2>
                <div className="flex flex-wrap">
                <p className="text-left mt-4 max-w-lg p-1">{topText}</p>
                <Image
                    width={300}
                    className="m-2"
                    alt="Card example background"
                    src={topImage}
                />
                </div>
                <Separator topColor={separatorColorTop} bottomColor={separatorColorBottom} />
                <div className="flex flex-wrap">
                <Image
                    className="m-2"
                    width={300}
                    alt="Information Section"
                    src={bottomImage}
                />
                <p className="text-left m-4 max-w-lg p-1">{bottomText}</p>
                </div>
                <div>
                    <p className="text-left font-bold mt-4 p-1">{empasisText}</p>
                </div>
            </div>
        </>
    )
}