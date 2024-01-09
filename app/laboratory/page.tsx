import { Lab } from "@/types/lab";
import Image from "next/image";
import { labdata } from "../Data";

const Laboratory = () => {
  return (
    <div className="container my-20 flex flex-wrap justify-center">
      {labdata.map((lab) => (
        <SingleLab key={lab.id} lab={lab} />
      ))}
    </div>
  );
}

export default Laboratory;

const SingleLab = ({ lab }: { lab: Lab }) => {
  const { type, supply, color, usage, delivery, voltage, warranty, size, dimension, material, price, href, image, name } = lab;

  return (
    <div className="container my-6 max-w-sm rounded overflow-hidden mr-10 shadow-lg mt-10 transform transition-transform duration-300 hover:scale-105">
      <Image
        className="w-full h-48 object-cover object-center rounded-t"
        src={image}
        alt={name}
        width={300}
        height={200}
      />

      <div className="px-6 py-4" style={{ width: "380px" }}>
        <div className="font-bold text-xl mb-2">{name}</div>
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

        {/* Added buttons */}
        <div className="flex justify-between mt-4" >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue mr-1"
          // onClick={() => {
          //   console.log("Request to call back clicked");
          // }}
          >
            Request to call back
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
          // onClick={() => {

          //   console.log("Send inquiry clicked");
          // }}
          >
            Send Inquiry
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};





