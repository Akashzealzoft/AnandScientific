// pages/product/[id].tsx

/** @jsxImportSource theme-ui */
/** @jsxImportSource @emotion/react */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { sendInquiry, requestCall } from '@/components/Button/buttonFunction';
import Popup from '@/components/Popup/Popup';
import { labdata, phdetectorDatas } from '@/app/Data';

const allProducts = [...labdata, ...phdetectorDatas];

const RelatedProducts = ({ relatedProducts }) => (
  <>
    <h2 className="text-2xl flex justify-center items-center text-black font-bold mb-4 dark:text-white">Related Products</h2>
    <div className="container flex justify-center my-8 dark:text-white text-black">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

const Page = ({ product }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleCallRequest = () => {
    console.log("Call request sent");
    setShowPopup(true);
  };

  const requestCall = handleCallRequest;

  const closePopup = () => {
    setShowPopup(false);
  };

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

        <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-8">
          <div className="font-bold text-xl mb-2 dark:text-black ">
            <Link href={`/product/${product.id}`} passHref>
              {product.name}
            </Link>
          </div>

          <p className="text-gray-700 text-base mb-2">{product.price}</p>
          {/* Include other product details here */}

          <div className='container flex-col md:flex-row flex'>
            <Button buttonContent="Request to call back" onClick={requestCall} className="mb-4 md:mb-0 md:mr-2"
              style='' />
            <Button
              className=''
              style=''
              buttonContent="Send Inquiry"
              onClick={sendInquiry}
            />
          </div>
        </div>
      </div>

      <RelatedProducts relatedProducts={product.relatedProducts} />
    </>
  );
};

export default Page;

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on products
  const paths = allProducts.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Fetch necessary data for the product using params.id
  const productId = parseInt(params.id, 10);
  const product = allProducts.find((p) => p.id === productId);

  // Get related products (customize this logic based on your requirements)
  const relatedProducts = allProducts
    .filter((relatedProduct) => relatedProduct.category === product.category && relatedProduct.id !== product.id)
    .slice(0, 3);

  // Pass product data to the page via props
  return {
    props: { product: { ...product, relatedProducts } },
  };
}
