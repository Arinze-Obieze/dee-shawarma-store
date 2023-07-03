
import { useRouter } from "next/router";
import { useState } from "react";
const Remove = ({ data }) => {
    const URI = "/api/mongodb/connection";

    async function removeShawarma(text) {
        const response = await fetch(`${URI}?text=${encodeURIComponent(text)}`, {
            method: "DELETE",
        });
        // Handle the response as needed
        console.log(data);
    }



    return (
        <div>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div key={item._id}>
                        <img src={item.image} alt={item.text} />
                        <div>{item.text}</div>
                        <div>{item.price}</div>
                        <button onClick={() => removeShawarma(item.text)}>Delete</button>
                    </div>
                ))
            ) : (
                <div>No shawarma data available</div>
            )}

        </div>
    );
};

export default Remove;