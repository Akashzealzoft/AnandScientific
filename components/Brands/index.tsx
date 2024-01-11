// const Brands = () => {
//   return (
//     <section className="pt-16">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div
//               className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
//               data-wow-delay=".1s"
//             >
//               {brandsData.map((brand) => (
//                 <SingleBrand key={brand.id} brand={brand} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

import { popularProducts } from "@/types/brand";
import popularproducts from "./brandsData";
import Image from "next/image";


const PopularProducts = () => {
  return (
    <section className="py-8 dark:bg-gray-dark">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularproducts?.map((brand) => (
            <SingleProduct key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleProduct = ({ brand }: { brand: popularProducts }) => {
  const { href, image, name } = brand;

  return (
    <div className="dark:bg-gray-dark bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="block overflow-hidden rounded-md hover:shadow-lg"
      >
        <Image
  
          src={image}
          alt={name}
          className="object-cover w-full h-40 rounded-md transition-transform transform hover:scale-105"
          width={100}
          height={100}
        />
      </a>
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700">{name}</p>
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PopularProducts;
