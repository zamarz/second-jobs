import Link from "next/link";
import { MdFormatListBulleted, MdOutlineEmail } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";

const Footer = () => {
  const style = { fontSize: "1.5em" };
  return (
    <footer className="bg-primary text-white py-8 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/" className="font-black text-tertiary-light">
            MP Second Jobs
          </Link>
          <div className="space-y-2 flex items-center">
            <RiContactsBook2Line style={style} />
            <h4 className="font-semibold mb-4 px-3">
              <Link href="/about">About</Link>
            </h4>
          </div>
          <div className="space-y-2 flex items-center">
            <MdFormatListBulleted style={style} />
            <h4 className="font-semibold mb-4 px-3">
              <Link href="/mps">MP List</Link>
            </h4>
          </div>
          <div className="space-y-2 flex items-center">
            <MdOutlineEmail style={style} />
            <h4 className="font-semibold mb-4 px-3">
              <Link href="/contact">Contact Me</Link>
            </h4>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MP Second Jobs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
