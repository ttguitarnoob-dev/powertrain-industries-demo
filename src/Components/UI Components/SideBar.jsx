import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"

export default function SideBar() {

    return (
        <>
            <section className="sidebar ml-2">
                <div className="mb-5 mt-4">
                    <h2>What's New</h2>
                </div>
                <div className="mb-10">
                    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">New Chipboard Tube Deadener For Sale!</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://picsum.photos/300/300"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p>1/15/2019</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mb-10">
                    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <h4 className="text-black font-medium text-2xl">Add Free Powertrain Hat To Your Stock Order!</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://picsum.photos/300/300"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p>12/18/2017</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mb-10">
                    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <h4 className="text-black font-medium text-2xl">New Flex Coupling Assemblies</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://picsum.photos/300/300"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p>05/23/2017</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mb-10">
                    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <h4 className="text-black font-medium text-2xl">Add Free Powertrain Hat To Your Stock Order!</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://picsum.photos/300/300"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">

                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </>

    )
}