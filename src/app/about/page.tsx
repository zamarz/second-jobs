import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="min-h-screen mx-auto container px-10 py-10">
      <div className="text-center text-pretty flex flex-col justify-center items-center ">
        <Image
          src={"/assets/parliament_2.jpg"}
          alt="An image of Parliament in the evening"
          width={500}
          height={500}
          className="py-5"
        />
        <h3 className="text-3xl md:text-4xl py-3 mx-auto">About</h3>
        <p className="text-xl py-4">
          This is a project which aims to make the data around how much MPs are
          making from additional income more accessible. Most of the data in the
          project is taken from the{" "}
          <Link
            className="underline hover:bg-tertiary-light"
            href="https://developer.parliament.uk/"
            target="_blank"
          >
            Parliament Members API.
          </Link>
        </p>
        <p className="text-xl py-4">
          However, the way that MPs are allowed to register these additional
          interests sometimes makes it a litle tricky to work with the data.
          There doesn't seem to be a uniform way in which they have to declare
          interests, which leads to a lot of variation.
        </p>
        <p className="text-xl py-4">
          Additionally, if they earn rent from property they own, it appears
          they don't have to declare how much they are earning from it. They
          only have to declare that they are earning the money. The same applies
          for property they own as we don't know how much it is worth.
        </p>
        <p className="text-xl py-4">
          I have added 'Totals' to each of the first five or so registered
          interest sections. This works out how much money an MP is making.
          Despite this, not all money will be declared in these 'Total' areas.
          Always make sure to double check the amounts in the descriptions of
          each interest to ensure that these values haven't been missed.
        </p>
      </div>
    </section>
  );
};

export default About;
