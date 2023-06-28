import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineShopping} from "react-icons/ai";
import SideMenu from "./sideMenu";

const NavBar = () => {

    const [show, setShow] = useState('hidden')

    const handleClick = (e) => {
        if (show) {
            setShow('')
        } else {
            setShow('hidden')
        }
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <BiMenuAltLeft size={40}
                            onClick={handleClick}
                        />
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-yellow-600">Dera Shawarma</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <AiOutlineShopping size={35}/>                    </button>
                </div>

            </div>

            <div className={` absolute z-50 w-full ${show} `}>
                <SideMenu />
            </div>
        </div>
    );
}

export default NavBar;