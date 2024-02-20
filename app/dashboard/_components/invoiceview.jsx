import React from "react";
import { format } from "date-fns";

export default function InvoiceView({ values, formik }) {
  return (
    <>
      <section className="sticky top-4 bg-white p-4 rounded border space-y-8">
        <div className="text-right">
          <h2 className="text-lg lg:text-xl font-bold">{formik.values.name}</h2>
          <p>{formik.values.address}</p>
          <p>
            <strong>Bank Name:</strong> {formik.values.bankName}
          </p>
          <p>
            <strong>Bank Account number:</strong> {formik.values.accountNumber}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg">{formik.values.clientName}</h2>
          <p>{formik.values.clientEmail}</p>
          <p>{formik.values.clientAddress}</p>
        </div>

        <div className="text-right">
          <h2 className="font-bold text-lg">Invoice Details</h2>
          <p>Invoice number: {formik.values.invoiceNumber}</p>
          {formik.values.invoiceDate && (
            <p>
              Invoice date:{" "}
              {format(new Date(formik.values.invoiceDate), "do MMMM yyyy")}
            </p>
          )}
          {formik.values.dueDate && (
            <p>
              Due date:{" "}
              {format(new Date(formik.values.dueDate), "do MMMM yyyy")}
            </p>
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

        <div className="w-1/2">
          <p className="text-slate-900 mb-2">
            <strong>Additional notes to the client</strong>
          </p>

          <p>{formik.values.notes}</p>
        </div>

        <div className="border-t pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <li>
              <strong>Name: </strong>
              {formik.values.name}
            </li>
            <li>
              <strong>Email: </strong>
              {formik.values.email}
            </li>
            <li>
              <strong>Bank Account Holder: </strong>
              {formik.values.name}
            </li>
            <li>
              <strong>Bank Account Number: </strong>
              {formik.values.accountNumber}
            </li>
            <li>
              <strong>Phone: </strong>
              {formik.values.phoneNumber}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
