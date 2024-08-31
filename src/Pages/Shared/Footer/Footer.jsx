import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="footer text-white place-items-center gap-0">
                <aside className="flex justify-center items-center gap-4 md:gap-6 flex-col bg-[#1F2937] w-full h-full p-10">
                    <h6 className="text-xl md:text-2xl lg:text-3xl font-medium">CONTACT US</h6>
                    <div className="text-center text-sm md:text-base lg:text-lg font-normal space-y-1">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </aside>
                <nav className="flex gap-4 md:gap-6 justify-center items-center flex-col bg-[#111827] w-full h-full">
                    <h6 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">Follow US</h6>
                    <p className="text-sm md:text-base lg:text-lg font-normal">Join us on social media</p>
                    <div className="grid grid-flow-col gap-4 text-xl md:text-2xl lg:text-3xl">
                        <a><FaFacebookF></FaFacebookF></a>
                        <a><FaInstagram></FaInstagram></a>
                        <a><FaTwitter></FaTwitter></a>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center text-white p-4 bg-[#151515]">
                <aside>
                    <p className="lg:text-lg">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;