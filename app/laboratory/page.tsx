'use client';
import React, { useState } from "react";
import { Lab } from "@/types/lab";
import Image from "next/image";
import { labdata } from "../Data";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { sendInquiry } from "@/components/Button/buttonFunction";
import Popup from "@/components/Popup/Popup";

const Laboratory = () => {
  return (
    <div className="container mt-60 flex flex-wrap justify-evenly">
      {labdata.map((lab) => (
        <SingleLab key={lab.id} lab={lab} />
      ))}
    </div>
  );
}

export default Laboratory;


const SingleLab = ({ lab }: { lab: Lab }) => {
  const [showPopup, setShowPopup] = useState(false);
  const requestCall = () => {
    console.log("Call request sent");
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const { type, supply, color, usage, delivery, voltage, warranty, size, dimension, material, price, href, image, name } = lab;

  return (
    <>
      {showPopup && <Popup onClose={closePopup} />}
      <div className="my-6 max-w-sm rounded overflow-hidden shadow-lg md:w-72 lg:w-96 transform transition-transform duration-300 hover:scale-105">

        <Image
          className="w-full h-48 object-cover object-center rounded-t"
          src={image}
          alt={name}
          width={200}
          height={200}
        />

        <div className="px-4 md:px-6 py-4">
          <div className="font-bold text-lg md:text-xl mb-2">
            <Link href={`/product/${lab.id}`} passHref>
              {name}
            </Link>
            <p className="text-gray-700 text-sm md:text-base mb-2">Type: {type}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">Supply: {supply}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">Color: {color}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">Usage: {usage}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">Delivery: {delivery}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">{warranty}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">{voltage}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">{dimension}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">{size}</p>
            <p className="text-gray-700 text-sm md:text-base mb-2">Material: {material}</p>
            <p className="text-gray-700 text-base mb-2">{price}</p>
          </div>

          {/* Added buttons */}
          <div className='flex flex-col md:flex-row'>
            <Button buttonContent="Request to call back" style="" onClick={requestCall} className="mb-2 md:mb-0 md:mr-2" />
            <Button
              style=""
              className=""
              buttonContent="Send Inquiry"
              onClick={sendInquiry}
            />
          </div>
        </div>

        <div className="px-4 md:px-6 py-4">
          <a
            href={href}
            target="_blank"
            rel="nofollow noreferrer"
            className="text-blue-500 hover:underline text-sm md:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </>

  );
};



