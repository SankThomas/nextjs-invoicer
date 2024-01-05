"use client";

import { useState } from "react";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

import UserForm from "./_components/userform";
import InvoiceView from "./_components/invoiceview";

export default function Dashboard() {
  const [name, setName] = useState("Thomas Sankara");
  const [address, setAddress] = useState("Apartment N514");
  const [date, setDate] = useState("2024-01-05");

  const values = { name, setName, address, setAddress, date, setDate };

  return (
    <>
      <section className="py-2 px-4">
        <div className="container flex items-center justify-between">
          <Button variant="outline">Your Dashboard</Button>

          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="container mt-16 grid lg:grid-cols-2 lg:gap-16">
          <div className="absolute top-4 left-4 w-40 h-40 bg-pink-500/25 blur-[100px] -z-10"></div>

          <UserForm values={values} />

          <InvoiceView values={values} />

          <div className="absolute right-4 bottom-4 w-40 h-40 bg-blue-500/25 blur-[100px] -z-10"></div>
        </div>
      </section>
    </>
  );
}
