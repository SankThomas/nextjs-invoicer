import React from "react";
import { format } from "date-fns";

export default function InvoiceView({ values }) {
  return (
    <>
      <section className="sticky top-4 bg-white p-4 rounded border space-y-8">
        <div className="text-right">
          <h2 className="text-lg lg:text-xl font-bold">{values.name}</h2>
          <p>{values.address}</p>
          <p>
            <strong>Bank Name:</strong> {values.bankName}
          </p>
          <p>
            <strong>Bank Account number:</strong> {values.accountNumber}
          </p>
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
          <table width="100%" className="mb-10">
            <thead>
              <tr className="bg-gray-100 p-1">
                <td className="font-bold">Item Name</td>
                <td className="font-bold">Quantity</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Total</td>
              </tr>
            </thead>
            {values.items.map((item) => (
              <React.Fragment key={item.id}>
                <tbody>
                  <tr className="h-10">
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>{item.total.toLocaleString()}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </table>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Kshs. {values.totalAmount.toLocaleString()}
          </h2>
        </div>

        <div>
          <p className="text-slate-900 mb-2">
            <strong>Additional notes to the client</strong>
          </p>

          <p>{values.notes}</p>
        </div>

        <div className="border-t pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <li>
              <strong>Name: </strong>
              {values.name}
            </li>
            <li>
              <strong>Email: </strong>
              {values.email}
            </li>
            <li>
              <strong>Bank Account Holder: </strong>
              {values.name}
            </li>
            <li>
              <strong>Bank Account Number: </strong>
              {values.accountNumber}
            </li>
            <li>
              <strong>Phone: </strong>
              {values.phoneNumber}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
