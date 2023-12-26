import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="bg-slate-300 h-10 w-full bottom-0 left-0">
        <div className="flex container mx-auto px-4 py-2 justify-center">
          <Link
            href="/"
            className="hover:-translate-y-2 duration-500 transition-all"
          >
            <span className="font-bold text-blue-600">Flux</span>
            hotels
          </Link>
          <div className="ml-3">Made with 💖 by Tyo</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
