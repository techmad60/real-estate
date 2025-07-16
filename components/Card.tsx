import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { LuFlagTriangleLeft } from "react-icons/lu";

interface PropertyCardProps {
  image: string;
  address: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
}

const PropertyCard = ({
  image,
  address,
  title,
  beds,
  baths,
  sqft,
  price,
}: PropertyCardProps) => (
  <div
    className="font-montsy w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px]
 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
  >
    <div className="w-full rounded-md aspect-[3/2] overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full mt-1">
      <p className="flex font-medium items-center gap-1">
        {address} <FaLocationDot className="-order-1" />
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{title}</p>
          <div className="flex items-center gap-2 font-poppins font-light text-sm ">
            <p className="flex shrink-0 gap-1 items-center">
              <IoBedOutline /> {beds} Beds
            </p>
            <p className="flex shrink-0 gap-1 items-center">
              <FaBath /> {baths} Baths
            </p>
            <p className="flex shrink-0 gap-1 items-center">
              <LuFlagTriangleLeft /> {sqft} sqft
            </p>
          </div>
        </div>
        <p className="font-semibold whitespace-nowrap">{price}</p>
      </div>
    </div>
  </div>
);
export default PropertyCard;
