import Header from "@/components/Header";
import { PiArrowCircleDownThin } from "react-icons/pi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-contain bg-secondary bg-center flex flex-col  font-poppins">
      <div className="relative flex flex-col items-center justify-center text-white w-full min-h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center md:min-h-auto lg:min-h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
        {/* Content */}
        <div className="relative z-10 w-full">
          <Header />
          {/* Hero Section */}
          <section className="p-4 flex flex-col items-center space-y-6 mt-28 sm:px-6 md:px-12 lg:px-16 lg:mt-40 ">
            <h1 className="font-semibold text-white text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:font-bold">
              HOME IS WHERE THE{" "}
              <span className="text-primary font-bold">HEART</span> IS.
            </h1>

            <p className="font-light text-center text-white/95 lg:w-[50rem]">
              Expert guidance, personalized services, and endless possibilities
              to find your perfect home — tailored to your unique dreams and
              needs.
            </p>

            <p className="font-light text-center text-white/95">
              Nature-inspired spaces for modern living and ultimate comfort.
            </p>

            <button className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/80 transition duration-300 font-medium mt-8 cursor-pointer">
              Explore Properties
            </button>

            <PiArrowCircleDownThin className="text-5xl text-white animate-bounce cursor-pointer mt-8" />
          </section>
        </div>
      </div>

      <main>
        <section className="flex flex-col justify-center items-center p-4 my-6 sm:px-6 md:px-12">
          <div className="flex flex-col justify-center items-center max-w-5xl md:grid grid-cols-2 gap-10 place-items-center lg:justify-start lg:min-h-screen">
            <div className="text-center text-white md:text-start">
              <h2 className="font-semibold text-2xl lg:text-4xl">
                Your <span className="text-primary">Home</span>, Your Legacy,
                Designed Forever.
              </h2>
              <p className="py-4 text-white/80 leading-relaxed">
                More than just a residence, Haven is a reflection of your
                individuality — thoughtfully designed just for you, and crafted
                to inspire generations to come.
              </p>
              <button className="mt-4 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300 hidden md:inline-block">
                Discover More
              </button>
            </div>

            <div className="relative">
              <Image
                src="/images/bg-main-1.svg"
                alt="Modern house"
                width={700}
                height={500}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl "
              />
              <Image
                src="/images/main-1.png"
                alt="Modern house"
                width={600}
                height={400}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl absolute  inset-0 -top-16"
              />
            </div>
            <button className="mt-4 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300  md:hidden">
              Discover More
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center p-4 my-6 sm:px-6 md:px-12 bg-white w-full">
          <div className="flex flex-col justify-center items-center max-w-5xl md:grid grid-cols-2 gap-10 place-items-center lg:justify-start lg:min-h-screen">
            <div className="text-center text-secondary md:text-start">
              <h2 className="font-semibold text-2xl lg:text-4xl">
                Let&apos;s Bring you closer to your Dream{" "}
                <span className="text-primary">Home</span>.
              </h2>

              <Image
                src="/images/main-2.jpg"
                alt="Modern house"
                width={600}
                height={400}
                className="w-full rounded-md my-8 md:-order-1 md:hidden max-w-md md:max-w-lg lg:max-w-xl "
              />
              <div className="grid grid-cols-3 grid-rows-2 mt-6 text-center">
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">100%</p>
                  <p className="text-[0.623625rem]">
                    Unmatched commitment to excellence in every aspect of
                    Parkview living.
                  </p>
                </div>
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">10k</p>
                  <p className="text-[0.623625rem]">
                    Square meters of lush landscaped spaces for residents to
                    enjoy.
                  </p>
                </div>
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">3</p>
                  <p className="text-[0.623625rem]">
                    Distinctive architectural styles tailored to your unique
                    taste.
                  </p>
                </div>
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">5+</p>
                  <p className="text-[0.623625rem]">
                    Amusement parks for family fun and lifelong memories.
                  </p>
                </div>
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">80+</p>
                  <p className="text-[0.623625rem]">
                    Luxurious building options available at Parkview.
                  </p>
                </div>
                <div className="border border-secondary p-2">
                  <p className="font-semibold text-4xl font-montsy">100%</p>
                  <p className="text-[0.623625rem]">
                    Dedication to creating a lifestyle that reflects your
                    aspirations.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end ">
                <button className="mt-8 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300 cursor-pointer">
                  Schedule a Visit
                </button>
              </div>
            </div>

            <Image
              src="/images/main-2.jpg"
              alt="Modern house"
              width={600}
              height={400}
              className="w-full rounded-md hidden md:flex md:-order-1 max-w-md md:max-w-lg lg:max-w-xl "
            />
          </div>
        </section>
      </main>
    </div>
  );
}
