import Header from "@/components/Header";
import { PiArrowCircleDownThin } from "react-icons/pi";
import { PiArrowCircleUpThin } from "react-icons/pi";
import Image from "next/image";
import PrimaryButton from "@/components/ui/Button";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqItem from "@/components/FaqItem";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const properties = [
    {
      image: "/images/grid-img-1.jpg",
      address: "2, Sunnyvale Rd",
      title: "Sunnyvale Retreat",
      beds: 4,
      baths: 3,
      sqft: 2500,
      price: "$399,000",
    },
    {
      image: "/images/grid-img-2.jpg",
      address: "29, Surulere Rd",
      title: "Sky Dive Villa",
      beds: 4,
      baths: 6,
      sqft: 2000,
      price: "$439,000",
    },
    {
      image: "/images/grid-img-3.jpg",
      address: "15, Strata Ave",
      title: "Sunnyvale Retreat",
      beds: 2,
      baths: 2,
      sqft: 1500,
      price: "$298,000",
    },
  ];
  const propertiesTwo = [
    {
      image: "/images/grid-img-4.jpg",
      address: "2, Sunnyvale Rd",
      title: "Sunnyvale Retreat",
      beds: 4,
      baths: 3,
      sqft: 2500,
      price: "$399,000",
    },
    {
      image: "/images/grid-img-5.jpg",
      address: "29, Surulere Rd",
      title: "Sky Dive Villa",
      beds: 4,
      baths: 6,
      sqft: 2000,
      price: "$439,000",
    },
    {
      image: "/images/grid-img-6.jpg",
      address: "15, Strata Ave",
      title: "Sunnyvale Retreat",
      beds: 2,
      baths: 2,
      sqft: 1500,
      price: "$298,000",
    },
  ];

  const testimonials = [
    {
      name: "Achraf Dominic",
      location: "Washington DC, USA",
      text: "Working with this Brand was a game changer, their expertise and personalized approach made buying my first home a breeze. They took time to understand my needs and guide me through every step, making the process feel seamless. I felt confident and well informed and I couldn't have asked for a better experience.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Walker Dalton",
      location: "Toronto, Canada",
      text: "Truly exceptional service. I felt valued, understood, and cared for throughout my entire journey. I'm now living in my dream home — thanks to them!",
      image: "/images/testimonial-2.png",
    },
    {
      name: "Kwame Mensah",
      location: "Accra, Ghana",
      text: "Finding a home where our family could grow together was everything. Parkview gave us more than a house — they gave us a space where memories are made every day. From the beautiful parks to the safe environment, our daughter loves it here as much as we do.",
      image: "/images/testimonial-3.jpg",
    },
  ];
  const faqs = [
    {
      question: "What types of properties are available at Parkview?",
      answer:
        "We offer a wide range of property types including luxury apartments, family homes, duplexes, and spacious residences, each designed to match different lifestyles and budgets.",
    },
    {
      question: "Can I schedule a property tour?",
      answer:
        "Absolutely! You can schedule an in-person or virtual tour by contacting our support team or using the 'Book a Tour' feature on our website.",
    },
    {
      question: "Is financing available for home purchases?",
      answer:
        "Yes, we partner with trusted financial institutions to offer flexible financing and mortgage options to qualified buyers. We’ll help guide you through the process.",
    },
    {
      question: "Are the properties family-friendly?",
      answer:
        "Yes! Our communities are designed with families in mind, featuring parks, recreational areas, and safe environments.",
    },
    {
      question: "How long does it take to complete a purchase?",
      answer:
        "Typically 2–4 weeks, depending on financing and documentation. We’ll walk with you through every step.",
    },
  ];

  const blog = [
    {
      image: "/images/grid-img-4.jpg",
      time: 2,
      title:
        "Legal Essentials: Understanding documentation in Real Estate Transactions",
    },
    {
      image: "/images/grid-img-5.jpg",
      time: 3,
      title:
        "The Importance Of Property Valuation: Getting the best price for your home",
    },
    {
      image: "/images/grid-img-6.jpg",
      time: 6,
      title: "Designing Tranquility: The Allure of Sunnyvale Retreat Living",
    },
  ];

  return (
    <div className="min-h-screen bg-contain bg-secondary bg-center flex flex-col font-poppins" id="top">
      <div className="relative flex flex-col items-center justify-center text-white w-full min-h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center md:min-h-auto lg:min-h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
        {/* Content */}
        <div className="relative z-10 w-full">
          <Header />
          {/* Hero Section */}
          <section className="p-4 flex flex-col items-center space-y-6 mt-28 sm:px-6 md:px-12 lg:px-16 lg:mt-40">
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

            <PrimaryButton> Explore Properties</PrimaryButton>

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
              <PrimaryButton className="hidden md:flex">
                {" "}
                Discover More
              </PrimaryButton>
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
            <PrimaryButton className="md:hidden"> Discover More</PrimaryButton>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-4 pt-10 pb-0 sm:px-6 md:px-12 bg-white w-full">
          <div className="flex flex-col justify-center items-center max-w-5xl md:grid grid-cols-2 gap-10 place-items-center lg:justify-start lg:min-h-screen">
            <div className="flex flex-col justify-center items-center text-secondary md:justify-start md:items-start">
              <h2 className="font-semibold text-center text-2xl md:text-start lg:text-4xl">
                Let&apos;s Bring you closer to your Dream{" "}
                <span className="text-primary">Home</span>.
              </h2>

              <Image
                src="/images/main-2.jpg"
                alt="Modern house"
                width={600}
                height={400}
                className="w-full rounded-4xl my-8 md:-order-1 md:hidden max-w-md md:max-w-lg lg:max-w-xl "
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

              <PrimaryButton className="mt-8"> Schedule a visit</PrimaryButton>
            </div>

            <Image
              src="/images/main-2.jpg"
              alt="Modern house"
              width={600}
              height={400}
              className="w-full rounded-4xl hidden md:flex md:-order-1 max-w-md md:max-w-lg lg:max-w-xl "
            />
          </div>
        </section>{" "}
        <section className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-white">
          <div className="flex flex-col justify-center items-center max-w-5xl lg:min-h-screen w-full">
            <h2 className="font-semibold text-center text-2xl lg:text-4xl">
              Explore Our Highly Rated{" "}
              <span className="text-primary">Apartments</span> &{" "}
              <span className="text-primary">Buildings</span>.
            </h2>

            <div className="flex overflow-x-scroll scroll-hidden mt-2 w-full gap-4 py-4 px-2 sm:px-4 md:justify-center">
              {[
                "Featured",
                "Residential",
                "Apartments",
                "College",
                "Duplex",
              ].map((label) => (
                <button
                  key={label}
                  className={`px-4 py-2 rounded-full border transition shrink-0 cursor-pointer ${
                    label === "Featured"
                      ? "bg-secondary text-white border-secondary"
                      : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2">
              {properties.map((p, i) => (
                <div key={i} className="snap-start">
                  <PropertyCard {...p} />
                </div>
              ))}
            </div>
            <div className="mt-12 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2">
              {propertiesTwo.map((p, i) => (
                <div key={i} className="snap-start">
                  <PropertyCard {...p} />
                </div>
              ))}
            </div>

            <button
              className={`px-4 py-2 rounded-full border transition shrink-0 cursor-pointer mt-12`}
            >
              View More
            </button>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className="relative min-h-screen bg-[url('/images/bg-ideal.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full md:min-h-auto lg:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
            <div className="bg-[rgba(255,255,255,0.8)] font-montsy flex flex-col justify-center items-center text-center rounded-4xl p-4 py-8 m-4 my-12 sm:mx-6 md:mx-12 max-w-xl z-40">
              <h3 className="font-semibold text-2xl md:text-3xl">
                What makes us your ideal real estate partner
              </h3>
              <p className="py-4">
                Our Knowledgeable team provide trusted expertise for informed
                real estate decision offering tailored support to meet your
                unique needs and demonstrate proven success through our track
                records.
              </p>
              <button
                className={`px-4 py-2 rounded-full border transition shrink-0 cursor-pointer mt-3 bg-secondary text-white`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-secondary">
          <div className="flex flex-col justify-center items-center max-w-5xl w-full">
            <h2 className="font-semibold text-center text-2xl text-white lg:text-4xl mb-6">
              What Our <span className="text-primary">Clients</span> Are Saying.
            </h2>

            <div className="grid gap-6 w-full max-w-5xl md:grid-cols-2 md:gap-3 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-white">
          <div className="flex flex-col justify-center items-center max-w-5xl w-full">
            <h2 className="font-semibold text-center text-2xl text-secondary lg:text-4xl mb-6">
              Frequently <span className="text-primary">Asked</span> Questions
            </h2>
            <div className="flex flex-col w-full items-center">
              {faqs.map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-black">
          <div className="flex flex-col justify-center items-center max-w-5xl w-full">
            <h2 className="font-semibold text-center text-2xl text-white lg:text-4xl mb-6">
              Latest <span className="text-primary">Blogs</span> and Articles.
            </h2>
            <div className="mt-4 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2">
              {blog.map((p, i) => (
                <div key={i} className="snap-start">
                  <BlogCard {...p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="flex flex-col justify-center items-center text-white">
          <div className="relative min-h-screen bg-[url('/images/bg-footer.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full md:min-h-auto lg:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
            <div className="font-montsy flex flex-col justify-center items-center text-center rounded-4xl p-4 py-8 m-4 my-12 sm:mx-6 md:mx-12 max-w-xl z-40">
              <h3 className="font-semibold text-2xl md:text-3xl">
                Your Perfect Home In Your Hand.
              </h3>
              <p className="py-4">
                Contact us today let get you that perfect home in instance. The
                luxury that comes with your very own space is top to none.
              </p>

              <a href="#top">
                <PiArrowCircleUpThin className="text-5xl text-white animate-bounce cursor-pointer mt-8" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
