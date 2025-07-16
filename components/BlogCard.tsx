import Image from "next/image";

interface BlogCardProps {
  image: string;
  time: number;
  title: string;
}

const BlogCard = ({ image, time, title }: BlogCardProps) => (
  <div
    className="font-montsy w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px]
 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
  >
    <div className="w-full rounded-4xl aspect-[3/2] overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full mt-4">
      <button
        className={`px-4 py-2 rounded-md border text-white transition shrink-0 cursor-pointer`}
      >
        {time} min Read
      </button>
      <p className="font-semibold text-white pt-3">{title}</p>
    </div>
  </div>
);
export default BlogCard;
