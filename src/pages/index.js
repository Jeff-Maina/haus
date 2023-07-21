import Image from "next/image";
import { Hanken_Grotesk, Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hotels = [
    {
      name: "Hainan Blue Bay resort",
      image:
        "https://i.pinimg.com/564x/15/ca/4a/15ca4ad998f43fcb424d909b40590bf4.jpg",
      destination: "Hawai",
    },
    {
      name: "The Peninsula Shanghai",
      image:
        "https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg",
      destination: "Shanghai",
    },
    {
      name: "Mystique Hotel",
      image:
        "https://i.pinimg.com/564x/4c/46/a7/4c46a784c1193ec76a61f85ba53dd03f.jpg",
      destination: "Santorini, Greece",
    },
    {
      name: "Gallery of Theros",
      image:
        "https://i.pinimg.com/564x/cd/79/ac/cd79accf30ecf8a9f9f88eaf60a64623.jpg",
      destination: "Kos, Greece",
    },
    {
      name: "Jungle Keva",
      image:
        "https://i.pinimg.com/564x/f9/57/f7/f957f77f3c47a811f7d037edad3538df.jpg",
      destination: "Barcelona, Spain",
    },
    {
      name: "Safari Hotels",
      image:
        "https://i.pinimg.com/564x/3e/a7/bf/3ea7bfd8b4de66887413d3457b826f31.jpg",
      destination: "South Africa",
    },
    {
      name: "Hard Rock Hotel",
      image:
        "https://i.pinimg.com/564x/00/e3/37/00e337a5fe2813377240408b6b8be363.jpg",
      destination: "Madrid,",
    },
    {
      name: "Mandarin Oriental",
      image:
        "https://i.pinimg.com/564x/5a/96/07/5a960747b6fa3fb1ebc970c7b56e4c51.jpg",
      destination: "Paris, France",
    },
    {
      name: "The Stella Luxury Resort and Spa",
      image:
        "https://i.pinimg.com/564x/ef/c6/62/efc662ad7d783e588fcf5f8a2f28693f.jpg",
      destination: "",
    },
  ];
  return (
    <>
      <Head>
        <title>Hotels</title>
      </Head>
      <main className="w-full h-auto">
        <div className="blur-container"></div>
        <div className="md:px-14 px-6">
          <NavBar />

          <section className="h-44 w-full items-end flex justify-between">
            <div className="relative">
              <h1 data-scroll className="text-[5rem] font-wulkanMedium p-0">
                Hotels
              </h1>
              <h1 className="absolute font-wulkanSemibold text-[1.9rem] font-extralight top-0 -right-12">
                (9)
              </h1>
            </div>
          </section>
          <sectior className="w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 image-grid mt-10">
            {hotels.map((hotel, index) => (
              <div
                data-scroll
                data-scroll-speed="0.5"
                className="w-full image-card rounded-md overflow-hidden relative"
              >
                <img
                  src={`${hotel.image}`}
                  className="h-full w-full object-cover hover:scale-110 transition-all ease duration-500"
                  alt=""
                />
                <div className="w-full absolute bottom-0 h-20 flex items-center pl-6 pointer-events-none">
                  <h1
                    data-scroll
                    data-scroll-speed=".2"
                    className="font-montserrat uppercase text-lg text-white z-10 relative border-r-2 pr-3 border-white"
                  >
                    {hotel.name}
                  </h1>
                  <h1 className="text-white relative z-10 pl-3 uppercase font-montserrat text-sm">
                    {hotel.destination}
                  </h1>
                </div>
              </div>
            ))}
          </sectior>
        </div>
        <div className="w-full  blur-container flex justify-center h-20 my-36 mb-6">
          {/*  //!Should be sticky!! for some reason it's not working,locomotive scroll's styles overwriting the sticky property perhaps??????who knows */}
          <div className="w-96 h-16 min-w-[23rem] rounded-full bg-[#222]  -translate-y-2 z-50 grid place-items-center p-4">
            <input
              type="text"
              className="h-full w-full bg-transparent pl-4 font-montserrat text-white"
              placeholder="Find your ideal hotel"
            />
          </div>
        </div>

        <footer className="w-full h-screen bg-[#1d1d1d] flex flex-col">
          <div className="w-full flex-grow lg:grid grid-cols-2">
            <div className="w-full lg:h-full h-2/4 grid place-items-center">
              <div className="flex flex-col items-center">
                <h1
                  data-scroll
                  data-scroll-speed="2"
                  className="text-white font-wulkanSemibold lg:text-[4rem] text-[2.5rem]"
                >
                  Stay in the know
                </h1>
                <button
                  data-scroll
                  data-scroll-speed="2"
                  className="bg-white lg:w-72 lg:h-14 relative grid place-items-center rounded-full p-3 px-10 button text-md mt-8 font-montserrat footer-button overflow-hidden"
                >
                  <div className="w-40 h-6 overflow-hidden relative grid place-items-center">
                    <h1 className="absolute text-top">Read our Substack</h1>
                    <h1 className="absolute text-bottom">Read our Substack</h1>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full lg:h-full h-2/4 lg:border-l border-t border-zinc-500 grid place-items-center">
              <div className="flex flex-col items-center">
                <h1
                  data-scroll
                  data-scroll-speed="2"
                  className="text-white font-wulkanSemibold lg:text-[4rem] text-[2.5rem]"
                >
                  Get in touch
                </h1>
                <button
                  data-scroll
                  data-scroll-speed="2"
                  className="bg-white lg:w-72 lg:h-14 relative grid place-items-center rounded-full p-3 px-10 button text-md mt-8 font-montserrat footer-button overflow-hidden"
                >
                  <div className="w-36 h-6 overflow-hidden relative grid place-items-center">
                    <h1 className="absolute text-top">Send us an Email</h1>
                    <h1 className="absolute text-bottom">Send us an Email</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-32 border-t border-zinc-500"></div>
        </footer>
      </main>
    </>
  );
}
