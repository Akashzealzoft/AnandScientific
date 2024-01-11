'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { labdata, phdetectorDatas } from '@/app/Data';
import Button from '@/components/Button/Button';
import { sendInquiry, requestCall } from '@/components/Button/buttonFunction';
import Popup from '@/components/Popup/Popup';
const allProducts = [...labdata, ...phdetectorDatas];
const RelatedProducts = ({ relatedProducts }) => (
    <>
        <h2 className="text-2xl flex justify-center items-center text-black font-bold mb-4 dark:text-white">Related Products</h2>
        <div className="container flex justify-center my-8 dark:text-white text-black">

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {console.log(relatedProducts)}
                {relatedProducts?.map((product) => (
                    <div key={product.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                        <Link href={`/product/${product.id}`} passHref>
                            <div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={200}
                                    className="h-auto object-cover rounded-md"
                                />
                            </div>
                        </Link>
                        <div className="mt-2">
                            <Link href={`/product/${product.id}`} passHref>
                                <p className="font-semibold text-blue-500 dark:text-blue-400">
                                    {product.name}
                                </p>
                            </Link>
                            <p className="text-gray-700 text-base mb-2">Type: {product.type}</p>
                            <p className="text-gray-700 text-base mb-2">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>

);

const Page = ({ params }) => {
    const [showPopup, setShowPopup] = useState(false);

    const requestCall = () => {
        console.log("Call request sent");
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const { id } = params;
    const product = allProducts.find((product) => product.id === parseInt(id, 10));
    console.log(product)

    if (!product) {
        return <p>Product not found</p>;
    }

    // Get related products (you can customize this logic based on your requirements)
    const relatedProducts = allProducts
        .filter((relatedProduct) => {
            console.log("product.type:", product.category);
            console.log("relatedProduct.type:", relatedProduct.category);
            return relatedProduct.category === product.category && relatedProduct.id !== product.id;
        })
        .slice(0, 3);




    return (
        <>
            {showPopup && <Popup onClose={closePopup} />}
            <div className="container md:w-7/12 mx-auto my-28 p-8 dark:bg-drak-grey shadow-lg rounded-md flex flex-col md:flex-col lg:flex-row">
                <div className="">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="h-auto object-cover rounded-md"
                    />
                </div>

                {/* Right side (Product Details) */}
                <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-8  ">
                    {/* Product details */}
                    <div className="font-bold text-xl mb-2 dark:text-black ">
                        <Link href={`/product/${product.id}`} passHref>
                            {product.name}
                        </Link>
                    </div>

                    <p className="text-gray-700 text-base mb-2">{product.price}</p>
                    <p className="text-gray-700 text-base mb-2">Type: {product.type}</p>
                    <p className="text-gray-700 text-base mb-2">Supply: {product.supply}</p>
                    <p className="text-gray-700 text-base mb-2">Color: {product.color}</p>
                    <p className="text-gray-700 text-base mb-2">Usage: {product.usage}</p>
                    <p className="text-gray-700 text-base mb-2">Delivery: {product.delivery}</p>
                    <p className="text-gray-700 text-base mb-2">{product.warranty}</p>
                    <p className="text-gray-700 text-base mb-2">{product.voltage}</p>
                    <p className="text-gray-700 text-base mb-2">{product.dimension}</p>
                    <p className="text-gray-700 text-base mb-2">{product.size}</p>
                    <p className="text-gray-700 text-base mb-2">Material: {product.material}</p>
                    <div className='container flex-col md:flex-row flex'>
                        <Button buttonContent="Request to call back" style="" onClick={requestCall} className="mb-4 md:mb-0 md:mr-2" />
                        <Button
                            style=""
                            className=""
                            buttonContent="Send Inquiry"
                            onClick={sendInquiry}
                        />
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <RelatedProducts relatedProducts={relatedProducts} />
        </>
    );
};

export default Page;




