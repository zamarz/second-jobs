import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/" className="font-black text-tertiary-light">
            MP Second Jobs
          </Link>
          <div className="space-y-2">
            <h4 className="font-semibold mb-4">About</h4>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold mb-4">MP List</h4>
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
