"use client";

import Link from "next/link";
import { links } from "./nav.links";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="shadow p-3">
        <div className="flex items-center justify-between p-4">
          <div className="font-bold text-3xl text-blue-800">E-SHIIP</div>

          <div className="md:flex items-center gap-5 hidden ">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={
                  pathname === link.path
                    ? "uppercase font-semibold text-red-600"
                    : "uppercase font-medium hover:text-red-600"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden block">
            <FaBars
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </nav>
      <MobileNavBar close={setOpen} open={open} />
    </>
  );
};

const MobileNavBar = ({ close, open }: any) => {
  const pathname = usePathname();

  return (
    <nav
      className={
        open
          ? "backdrop-blur-sm bg-black/40 z-40 absolute top-0 left-0 w-full h-screen "
          : "hidden"
      }
    >
      <div className="px-8 py-3 bg-white flex h-full flex-col w-[240px] relative">
        <div className="absolute right-0 p-3">
          <FaTimes className="cursor-pointer" onClick={() => close(false)} />
        </div>
        <div className="flex flex-col gap-10 my-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={
                link.path === pathname
                  ? "uppercase font-semibold text-red-600"
                  : "uppercase font-medium hover:text-red-600"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
