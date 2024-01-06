"use client";

import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";

export default function Step1({ values, setSteps }) {
  // Prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="space-y-8">
      <h2 className="font-bold text-xl">Step 1 / 3: Your details</h2>

      <form className="grid gap-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <article className="md:flex-1">
            <label htmlFor="name" className="label">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="input"
              value={values.name}
              onChange={(e) => values.setName(e.target.value)}
            />
            <small className="text-slate-600">
              Your official name, or your company name.
            </small>
          </article>

          <article className="md:flex-1">
            <label htmlFor="email" className="label">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="input"
              value={values.email}
              onChange={(e) => values.setEmail(e.target.value)}
            />
            <small className="text-slate-600">Your email is optional.</small>
          </article>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article>
            <label htmlFor="address" className="label">
              Physical / Company address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
              className="input"
              value={values.address}
              onChange={(e) => values.setAddress(e.target.value)}
            />
            <small className="text-slate-600">
              Your physical address, company address, street name, or City.
            </small>
          </article>

          <article>
            <label htmlFor="number" className="label">
              Phone number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              className="input"
              value={values.phoneNumber}
              onChange={(e) => values.setPhoneNumber(e.target.value)}
            />
            <small className="text-slate-600">
              Your phone number or company phone number.
            </small>
          </article>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article>
            <label htmlFor="bank-name" className="label">
              Bank name
            </label>
            <input
              type="text"
              name="bank-name"
              id="bank-name"
              placeholder="Your bank name"
              className="input"
              value={values.bankName}
              onChange={(e) => values.setBankName(e.target.value)}
            />
          </article>

          <article>
            <label htmlFor="account-number" className="label">
              Bank account number
            </label>
            <input
              type="text"
              name="account-number"
              id="account-number"
              placeholder="Your bank account number"
              className="input"
              value={values.accountNumber}
              onChange={(e) => values.setAccountNumber(e.target.value)}
            />
          </article>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <article className="md:flex-1">
            <label htmlFor="date" className="label">
              Invoice date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Invoice date"
              className="input"
              value={values.invoiceDate}
              onChange={(e) => values.setInvoiceDate(e.target.value)}
            />
          </article>

          <article className="md:flex-1">
            <label htmlFor="due-date" className="label">
              Due date
            </label>
            <input
              type="date"
              name="due-date"
              id="due-date"
              placeholder="Due by"
              className="input"
              value={values.dueDate}
              onChange={(e) => values.setDueDate(e.target.value)}
            />
          </article>
        </div>
      </form>

      <Button
        onClick={() => {
          setSteps(2);
          window.scrollTo(0, 0);
        }}
      >
        <button>Next step</button>
      </Button>
    </section>
  );
}
