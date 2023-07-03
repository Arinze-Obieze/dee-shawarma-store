import Image from "next/image";

const ProductList = ({data}) => {
    return (
        <div>
            <div className="flex flex-wrap">
                {data && data.map((item) => (
                    <div key={item._id} className="my-4 w-full border-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="bg-white  rounded-lg shadow-lg">
                            <Image width={400} height={400}
                                className=" mx-auto p-1 rounded-t-lg"
                                src={item.image}
                                alt={item.text}
                            />
                            <div className="p-4 text-center border-4">
                                <div className="text-lg font-bold border-4">Name: {item.text}</div>
                                <div> description:lorex ipsum lorem maxura</div>
                                <div className="text-gray-600 border-4 ">Price: {item.number}</div>
                            </div>
                            <div className="text-center mt-3">                            <button className="border-2 p-3 mx-auto bg-yellow-600 rounded-full ">Order Now</button>
                            </div>                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ProductList;