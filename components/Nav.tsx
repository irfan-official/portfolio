import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="w-full   flex items-center justify-between mt-5">
      <section className="_left_ font-bold  text-2xl">
        MERN Stack Developer
      </section>
      <section className="_right_ font-semibold ">
        <ul className="flex items-center gap-10 text-xl">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">work</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
