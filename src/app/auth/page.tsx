import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const inputStyles =
    "border border-black dark:border-white sm:text-xs text-black rounded-full block w-full p-3 focus:outline-none";
  return (
    <section className="container mx-auto h-screen">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold md:text-2xl">Buat akun</h1>
          <p>Atau</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />{" "}
            | <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form className="flex flex-col space-y-4 md:space-y-6 items-center">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className={inputStyles}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className={inputStyles}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••"
            minLength={6}
            className={inputStyles}
            required
          />
          <button
            type="submit"
            className="w-[50%] bg-blue-400 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 hover:transition-all font-bold focus:outline-none  rounded-full text-sm px-5 py-3 text-center"
          >
            Sign up
          </button>
        </form>
        <span className="flex w-full justify-center">
          Sudah punya akun?
          <button className="text-blue-700 dark:text-blue-500 underline ml-2">
            Login
          </button>
        </span>
      </div>
    </section>
  );
};

export default Auth;
