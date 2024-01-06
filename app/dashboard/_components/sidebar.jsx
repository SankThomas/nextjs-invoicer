import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 bg-slate-900 text-white h-screen fixed left-0 top-0">
      <div className="flex flex-col justify-between h-full px-4 py-8">
        <ul>
          <li className="font-bold text-lg">Welcome</li>
          {/* <li className="mt-16">
            <Link href="/dashboard">Create Invoice</Link>
          </li> */}
        </ul>

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
