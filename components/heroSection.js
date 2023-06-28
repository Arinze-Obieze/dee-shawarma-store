import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "../styles/HeroSection.module.css";



const HeroSection = () => {
    useEffect(() => {
        const h1Element = document.querySelector("h1");
        const h2Element = document.querySelector("h2");

        if (h1Element && h2Element) {
            h1Element.classList.add(styles.slideRight);
            h2Element.classList.add(styles.slideLeft);
        }
    }, []);

    return (
        <div>
            <div className="text-center bg-black py-20 w-100 h-100">
                <h1 className={`text-4xl font-bold leading-relaxed text-yellow-600 mb-4 ${styles.slideRight}`}>Welcome to Dera Shawarma</h1>
                <h2 className={`text-2xl font-medium text-white ${styles.slideLeft}`}>Your best shawarma plug</h2>

                <div className="space-x-7 mt-16">
                    <Link href={'#'}><button className="btn btn-outline text-yellow-600 ">Home Delivery</button></Link>
                    <Link href={'#'}><button className="btn btn-outline text-yellow-600 px-8 ">Location</button></Link>

                </div>


            </div>

        </div>



    );
};

export default HeroSection;
