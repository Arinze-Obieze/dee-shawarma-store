import ProductList from "./productLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BeatLoader } from 'react-spinners';



const Product = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'api/mongodb/connection';
                const response = await fetch(url, {
                    method: 'GET'
                });
                const jsonData = await response.json();
                setData(jsonData);
                //  console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [data]);



    return (
        <div>
            {data && data.length > 0 ? <ProductList data={data} /> : <div className="mx-auto text-center"> <BeatLoader color="#000000" /></div>}

        </div>
    );
};

export default Product;

