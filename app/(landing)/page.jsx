import React from "react";
import Header from "./_components/header";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function LandingPage() {
  const { userId } = auth();

  return (
    <>
      <Header />

      <section className="relative space-y-8 text-center py-32 px-4 max-w-4xl mx-auto">
        <div className="absolute w-40 h-40 bg-pink-500 blur-[100px] -z-10"></div>

        <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
          Welcome to Invoicer V2
        </h1>
        <p className="text-slate-600 lg:text-xl">
          Easily create invoices for yourself, your clients all at the
          convenience of your mobile phone or PC. Version 2 offers improved
          performance, better responsiveness on mobile, and better UI design by{" "}
          <a
            href="https://tsbsankara.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Thomas Sankara.
          </a>
        </p>

        <ul className="text-slate-600 text-left grid gap-4">
          <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
            <Check className="text-white bg-emerald-500 rounded-full" /> Create
            invoices for yourself.
          </li>
          <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
            <Check className="text-white bg-emerald-500 rounded-full" /> Create,
            download and send invoices to your clients.
          </li>
          <li className="text-center flex flex-col md:flex-row items-center md:justify-center gap-2">
            <Check className="text-white bg-emerald-500 rounded-full" /> Only
            use your credit card if you want to continue after your free trial.
          </li>
        </ul>

        {!userId ? (
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Button asChild variant="secondary">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="default">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center justify-center">
            <li>
              <Button asChild variant="default">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </li>
          </ul>
        )}

        <div className="absolute right-0 w-40 h-40 bg-blue-500 blur-[100px] -z-10"></div>
      </section>
    </>
  );
}
