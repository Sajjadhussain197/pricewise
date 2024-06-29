import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6  py-24 md:px-20 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center ">
            <p className="small-text">
              Smart Shopping Start Here
              <Image
                src="/assets/icons/arrow-right.svg"
                height={16}
                width={16}
                alt="arrow-right" />
            </p>
            <h1 className="head-text">
              Unleash th Power of 
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
              <SearchBar />
          </div>
          <div className=" lg:w-1/2"><HeroCarousel /></div>
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text"> Trending </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['apple iphone 15','shoes', 'clothes'].map((product)=>(
            <div >{product}</div>
          ))}
        </div>
      </section>
    </>
  );
}
