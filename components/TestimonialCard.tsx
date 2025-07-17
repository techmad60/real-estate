import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

const TestimonialCard = ({ name, location, text, image }: TestimonialProps) => (
  <div className="flex flex-col items-center text-center gap-3 p-6 bg-white h-full border rounded-xl shadow-sm w-full max-w-lg mx-auto ">
    <Image
      src={image}
      alt={`${name} testimonial`}
      width={200}
      height={200}
      className="rounded-full object-cover w-[200px] h-[200px]"
    />
    <div>
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
    <div className="flex gap-1 text-secondary text-xl">
      {[...Array(5)].map((_, i) => (
        <IoStarSharp key={i} />
      ))}
    </div>
    <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
  </div>
);

export default TestimonialCard;
