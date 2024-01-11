'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { PhDetectorData } from '@/types/lab';
import { phdetectorDatas } from '../Data';
import Link from 'next/link';
import { requestCall, sendInquiry } from '@/components/Button/buttonFunction';
import Button from '@/components/Button/Button';
import Popup from '@/components/Popup/Popup';


const PhDetector = ({ product }: { product: PhDetectorData }) => {
  const [showPopup, setShowPopup] = useState(false)
  const requestCall = () => {
    console.log("Call request sent")
    setShowPopup(true)
  }
  const closePopup = () => {
    setShowPopup(false);
  };
  const { name, type, supply, color, usage, delivery, voltage, warranty, size, dimension, material, price, href, image } = product;
  console.log(product)

  return (
    <>
      {showPopup && <Popup onClose={closePopup} />}
      <div className="container my-20 max-w-sm rounded overflow-hidden mr-10 shadow-lg mt-10 transform transition-transform duration-300 hover:scale-105">
        <Image
          className="w-full h-48 object-cover object-center rounded-t"
          src={image}
          alt={name}
          width={300}
          height={200}
        />

        <div className="px-6 py-4 w-96" >
          <div className="font-bold text-xl mb-2">
            <Link href={`/product/${product.id}`} passHref>
              {name}
            </Link>
          </div>
          <p className="text-gray-700 text-base mb-2">Type: {type}</p>
          <p className="text-gray-700 text-base mb-2">Supply: {supply}</p>
          <p className="text-gray-700 text-base mb-2">Color: {color}</p>
          <p className="text-gray-700 text-base mb-2">Usage: {usage}</p>
          <p className="text-gray-700 text-base mb-2">Delivery: {delivery}</p>
          <p className="text-gray-700 text-base mb-2">{warranty}</p>
          <p className="text-gray-700 text-base mb-2">{voltage}</p>
          <p className="text-gray-700 text-base mb-2">{dimension}</p>
          <p className="text-gray-700 text-base mb-2">{size}</p>
          <p className="text-gray-700 text-base mb-2">Material: {material}</p>
          <p className="text-gray-700 text-base mb-2">{price}</p>

          {/* Added buttons with improved responsiveness */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            <Button className="" style="mb-2 md:mb-0" buttonContent="Request Call Back" onClick={requestCall} />
            <Button
              className="md:ml-2 bg-blue-500 text-white hover:bg-blue-700 border-blue-500"
              onClick={sendInquiry}
              buttonContent="Send Inquiry"
              style="mt-2 md:mt-0"
            />
          </div>

        </div>

        <div className="px-6 py-4">
          <Link
            href={`/product/${product.id}`} passHref
            target="_blank"
            rel="nofollow noreferrer"
            className="text-blue-500 hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>

  );
};


const Detector = () => {
  return (
    <div className="container my-20 flex flex-wrap justify-center">
      {phdetectorDatas.map((product) => (
        <PhDetector key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Detector;
// PhDetector.tsx
// PhDetector.tsx
