"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    title: "Dashboard",
  },
  // {
  //   href: "/contact",
  //   title: "Contact",
  // },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-52 bg-gradient-to-b from-slate-900 to-pink-500 text-white h-screen fixed left-0 top-0">
      <div className="flex flex-col justify-between h-full px-4 py-8">
        <div>
          <h2 className="font-bold text-lg text-white">Welcome</h2>

          <ul className="mt-16 grid gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    link.href === pathname && "bg-slate-700 opacity-100"
                  } rounded-lg py-2 px-4 w-full opacity-75 transition`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <small className="text-white/75">
          &copy; Copyright{" "}
          <a
            href="https://tsbsankara.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            Thomas Sankara
          </a>{" "}
          {new Date().getFullYear()}
        </small>
      </div>
    </aside>
  );
}
