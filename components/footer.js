import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram }  from "react-icons/fi"


const Footer = () => {
    return (
        <div>
            {/**Whatsapp floating */}
            <div className="fixed bottom-4 right-4">
                <Link href={'#'} className=''>
                    <AiOutlineWhatsApp
                        size={50} color={'green'}
                    />
                </Link>
            </div>


            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/favicon.jpg" width={77} height={44} alt="v" />
                        <span className="ml-3 text-xl">Dera Shawarma</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Dera Shawarma—
                        <a href="https://twitter.com/arinzeobieze" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@arinzeobieze</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <FaFacebook />
                        </a>
                        <a className="ml-3 text-gray-500">
                           <AiOutlineTwitter/>
                        </a>
                        <a className="ml-3 text-gray-500">
                        <FiInstagram/>  
                        </a>

                    </span>
                </div>
            </footer>



        </div>
    );
}

export default Footer;