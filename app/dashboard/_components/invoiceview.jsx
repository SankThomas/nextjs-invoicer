import React from "react";
import { format } from "date-fns";

export default function InvoiceView({ values }) {
  return (
    <>
      <section className="bg-white p-4 rounded border space-y-8 max-h-full overflow-auto">
        <div className="text-right">
          <h2 className="text-lg lg:text-xl font-bold">{values.name}</h2>
          <p>{values.address}</p>
          <p>Bank Name: {values.bankName}</p>
          <p>Bank Account number: {values.accountNumber}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg">{values.clientName}</h2>
          <p>{values.clientAddress}</p>
        </div>

        <div className="text-right">
          <h2 className="font-bold text-lg">Invoice Details</h2>
          <p>Invoice number: {values.invoiceNumber}</p>
          {values.invoiceDate && (
            <p>
              Invoice date:{" "}
              {format(new Date(values.invoiceDate), "do MMMM yyyy")}
            </p>
          )}
          {values.dueDate && (
            <p>Due date: {format(new Date(values.dueDate), "do MMMM yyyy")}</p>
          )}
        </div>

        <div>
          <ul className="bg-slate-200 p-1 rounded flex items-center justify-between text-sm font-bold text-slate-900">
            <li>Item</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Total</li>
          </ul>

          <ul className="p-1 rounded flex items-center justify-between text-sm text-slate-900">
            {values.items.map((item) => (
              <>
                <li>{item.item}</li>
                <li>{item.quantity}</li>
                <li>{item.price}</li>
                <li>{item.total}</li>
              </>
            ))}
          </ul>

          <div className="grid gap-2 mt-2">
            <ul className="flex items-center justify-between"></ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Kshs. {values.totalAmount}</h2>
        </div>

        <div>
          <p>Additional notes to the client</p>

          <p>{values.notes}</p>
        </div>
      </section>
    </>
  );
}
