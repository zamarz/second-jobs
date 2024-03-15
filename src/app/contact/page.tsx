import Link from "next/link";

const Contact = () => {
  return (
    <section className="min-h-screen flex justify-center items-center ">
      <div className="text-center w-2/3 text-balance">
        <h3 className="text-3xl py-3 mx-auto">Contact Me</h3>
        <p className="text-xl py-4">
          Spot a bug? Got a recommendation to make? Or just want to say hi? Feel
          free to send me an{" "}
          <Link
            className="underline hover:bg-tertiary-light"
            href="mailto:zmarzouk23@gmail.com"
            target="_blank"
          >
            email
          </Link>
          .
        </p>
        <p className="text-xl py-4">
          Alternatively, check out my Github{" "}
          <Link
            className="underline hover:bg-tertiary-light"
            href="https://github.com/zamarz"
            target="_blank"
          >
            here
          </Link>{" "}
          or buy me a coffee here.
        </p>
      </div>
    </section>
  );
};

export default Contact;
