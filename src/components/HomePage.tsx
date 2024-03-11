import Link from "next/link";
import Search from "./Search";

const HomePage = () => {
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        {" "}
        <h4 className="text-2xl">
          Find out what second jobs and additonal sources of income your MP has.
        </h4>
        <div className="py-5">
          <Search />
        </div>
        <p className="text-2xl py-3">
          Most data is taken from the{" "}
          <Link
            className="underline hover:bg-tertiary-light"
            href="https://developer.parliament.uk/"
            target="_blank"
          >
            Parliament Members API.
          </Link>
        </p>
        <p className="text-xl py-3">
          Read more about this in our{" "}
          <Link className="font-semibold underline" href="/about">
            About
          </Link>{" "}
          section.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
