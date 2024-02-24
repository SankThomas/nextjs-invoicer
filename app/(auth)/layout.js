import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="pt-4 pl-4">
        <Link
          href="/"
          className="text-muted-foreground hover:text-slate-800 hover:underline"
        >
          &larr; Back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        {children}
      </div>
    </div>
  );
}
