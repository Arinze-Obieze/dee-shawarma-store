import { useEffect, useState } from "react";

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
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && data.map((item) => (
                <div key={item._id}>

                    <div>{item.name}</div>
                    <div>{item.price}</div>

                </div>
            ))}
        </div>
    );
};

export default Product;
