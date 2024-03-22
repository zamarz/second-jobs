import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="min-h-screen mx-auto container px-10 py-10">
      <div className="text-center text-balance flex flex-col justify-center items-center">
        <Image
          src={"/assets/uk_telephone_contact.jpg"}
          alt="An image of two red telephone boxes with the London Eye behind them"
          width={500}
          height={500}
          className="py-5"
        />
        <h3 className="text-3xl md:text-4xl py-3 mx-auto">Contact Me</h3>
        <p className="text-xl py-4">
          Spot a bug, got a recommendation to make, or just want to say hi? Feel
          free to send me an{" "}
          <Link
            className="underline hover:bg-tertiary-alt"
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
            className="underline hover:bg-tertiary-alt"
            href="https://github.com/zamarz"
            target="_blank"
          >
            here
          </Link>{" "}
          or{" "}
          <Link
            className="underline hover:bg-tertiary-alt"
            href="https://www.paypal.com/donate/?hosted_button_id=QHRKJF2CZMG54"
            target="_blank"
          >
            buy me a coffee
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
