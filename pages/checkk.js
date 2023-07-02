import React from 'react';

const ProductDesign = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-full md:w-1/2 px-4">
                <img width={100}
                    src="sha.jpg"
                    alt="Product"
                    className="w-full h-auto rounded-lg mt-6 md:mt-0"
                />
            </div>
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4">
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-3xl font-bold mb-4">Product Title</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                maximus tellus nec metus fermentum lacinia.
                            </p>
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-semibold text-gray-800">
                                    $49.99
                                </span>
                                <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500">Rating:</span>
                                <div className="ml-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.065 6.335h6.703l-5.445 3.965 2.134 6.292L10 14.865l-5.457 3.663 2.134-6.292L1.232 7.335h6.703L10 1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 ml-1">4.5</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDesign;
