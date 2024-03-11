import Link from "next/link";

const About = () => {
  return (
    <section className="min-h-screen flex justify-center items-center ">
      <div className="text-center w-2/3 text-balance">
        <h3 className="text-3xl py-3 mx-auto">About</h3>
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
          I have added 'Totals' to each section, for the hours each MP works and
          how much money they make. Despite this, not all hours and money will
          be declared in these areas. Always make sure to double check the
          amounts in the descriptions of each interest to ensure that these
          values haven't been missed.
        </p>
      </div>
    </section>
  );
};

export default About;
