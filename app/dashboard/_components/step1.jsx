"use client";

import { useEffect, useState } from "react";

export default function Step1({ formik }) {
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
      <h2 className="font-bold text-xl">Your details</h2>

      <form className="grid gap-8" onSubmit={formik.handleSubmit}>
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
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {!formik.errors.name && (
              <small className="text-slate-600">
                Your official name, or your company name.
              </small>
            )}

            {formik.errors.name && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.name}
              </small>
            )}
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
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {!formik.errors.email && (
              <small className="text-slate-600">Your email is optional.</small>
            )}
            {formik.errors.email && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.email}
              </small>
            )}
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
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.values.address && (
              <small className="text-slate-600">
                Your physical address, company address, street name, or City.
              </small>
            )}
            {formik.errors.address && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.address}
              </small>
            )}
          </article>

          <article>
            <label htmlFor="phoneNumber" className="label">
              Phone number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Your phone number"
              className="input"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </article>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article>
            <label htmlFor="bankName" className="label">
              Bank name
            </label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder="Your bank name"
              className="input"
              value={formik.values.bankName}
              onChange={formik.handleChange}
            />
            {formik.errors.bankName && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.bankName}
              </small>
            )}
          </article>

          <article>
            <label htmlFor="accountNumber" className="label">
              Bank account number
            </label>
            <input
              type="number"
              name="accountNumber"
              id="accountNumber"
              placeholder="Your bank account number"
              className="input"
              value={formik.values.accountNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.accounNumber && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.accounNumber}
              </small>
            )}
          </article>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <article className="md:flex-1">
            <label htmlFor="invoiceDate" className="label">
              Invoice date
            </label>
            <input
              type="date"
              name="invoiceDate"
              id="invoiceDate"
              placeholder="Invoice date"
              className="input"
              value={formik.values.invoiceDate}
              onChange={formik.handleChange}
            />
            {formik.errors.invoiceDate && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.invoiceDate}
              </small>
            )}
          </article>

          <article className="md:flex-1">
            <label htmlFor="dueDate" className="label">
              Due date
            </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              placeholder="Due by"
              className="input"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
            />
            {formik.errors.dueDate && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.dueDate}
              </small>
            )}
          </article>

          <article className="md:flex-1">
            <label htmlFor="invoiceNumber" className="label">
              Invoice number
            </label>
            <input
              type="number"
              name="invoiceNumber"
              id="invoiceNumber"
              placeholder="Invoice number"
              className="input"
              value={formik.values.invoiceNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.invoiceNumber && (
              <small className="text-rose-400 text-xs font-semibold">
                {formik.errors.invoiceNumber}
              </small>
            )}
          </article>
        </div>
      </form>
    </section>
  );
}
