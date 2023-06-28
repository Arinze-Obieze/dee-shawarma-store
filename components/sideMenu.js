import Link from "next/link";

const SideMenu = () => {
    return (
        <div className="h-screen w-1/2 flex flex-col pt-10 items-center bg-black">
            <ul className="text-white text-3xl space-y-8">
                <li className= "  hover:text-yellow-600">
                    <Link href="#">Home</Link>
                </li>
                <li className= "  hover:text-yellow-600">
                    <Link href="#">Order</Link>
                </li>
                <li className= "  hover:text-yellow-600">
                    <Link href="#">Location</Link>
                </li>
                <li className= "  hover:text-yellow-600">
                    <Link href="#">Gallery</Link>
                </li>
                <li className= "  hover:text-yellow-600">
                </li>
                <li className= "  hover:text-yellow-600">
                    <Link href="#">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
