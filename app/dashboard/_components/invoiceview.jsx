import React from "react";

export default function InvoiceView({ values }) {
  return (
    <>
      <section className="bg-white p-4 rounded border grid ">
        <div>
          <h2 className="text-lg lg:text-xl font-bold">Thomas</h2>
          <p>Apartment</p>
        </div>

        <div>
          <h2 className="font-bold text-lg">Client name</h2>
          <p>Client address</p>
        </div>
      </section>
    </>
  );
}
