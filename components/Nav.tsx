import React from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";

function Nav() {
  const list = (
    <ul className="flex items-center gap-10 text-xl">
      <li>
        <Link href="#">About</Link>
      </li>
      <li>
        <Link href="#">work</Link>
      </li>
      <li>
        <Link href="#">Contact</Link>
      </li>
    </ul>
  );
  return (
    <nav className="w-full   flex items-center justify-between mt-2 lg:mt-5">
      <section className="_left_ font-bold  text-lg text-2xl">
        MERN Stack Developer
      </section>
      <section className="_right_ hidden md:block font-semibold ">
        {list}
      </section>
      <section className="block md:hidden">
        <HiMenuAlt1 size={30} />
      </section>
    </nav>
  );
}

export default Nav;
