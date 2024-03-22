import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import ReactGA from "react-ga4";

ReactGA.initialize(`${process.env.NEXT_PUBLIC_MEASUREMENTID}`);

const HomePage = () => {
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        <Image
          src={"/assets/parliament.jpg"}
          alt="An image of Parliament"
          width={400}
          height={400}
          priority={true}
          className="py-5 w-auto h-auto"
        />{" "}
        <h2 className="text-3xl py-5 font-semibold">
          What second jobs does my MP have?
        </h2>
        <h3 className="text-2xl">
          Find out what second jobs and additonal sources of income your MP has.
        </h3>
        <div className="py-5">
          <Search />
        </div>
        <p className="text-2xl">
          Most data is taken from the{" "}
          <Link
            className="underline hover:bg-tertiary-light dark:hover:bg-tertiary-light/50"
            href="https://developer.parliament.uk/"
            target="_blank"
          >
            Parliament Members API.
          </Link>
        </p>
        <p className="text-xl py-3">
          Read more about this in our{" "}
          <Link
            className="font-semibold underline hover:bg-tertiary-light dark:hover:bg-tertiary-light/50"
            href="/about"
          >
            About
          </Link>{" "}
          section.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
