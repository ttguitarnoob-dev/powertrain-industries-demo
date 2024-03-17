import { MailIcon } from "./Icons/MailIcon";
import { PhoneIcon } from "./Icons/PhoneIcon";

export default function Footer() {

    return (
        <>
            <section className="footer mt-6">
                <div className="flex space-x-4 ">
                    <h2 className="text-white">Footer Content</h2>
                    <MailIcon />
                    <PhoneIcon />
                </div>
                <div>
                    <a target="_blank" href="https://travisty-creations.com">© 2024 Travisty Creations</a>
                </div>
            </section>
        </>
    )
}