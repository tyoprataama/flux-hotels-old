import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/"> <span className="font-bold text-blue-600">Flux</span>hotels</Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center cursor-pointer">
            <Link href="/user">Icons</Link>
          </li>
          <li className="ml-2 cursor-pointer">Icons</li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
