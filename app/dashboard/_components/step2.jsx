"use client";

import Link from "next/link";
import React from "react";

export default function Step2({ formik }) {
  return (
    <>
      <section className="space-y-8 mt-12">
        <h2 className="font-bold text-xl">Client details</h2>

        <form className="grid gap-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <article className="md:flex-1">
              <label htmlFor="clientName" className="label">
                Client's name
              </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Client's name"
                className="input"
                value={formik.values.clientName}
                onChange={formik.handleChange}
              />
              {!formik.errors.clientName ? (
                <small className="text-slate-600">
                  The name of the client that will appear on the invoice
                </small>
              ) : (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.clientName}
                </small>
              )}
            </article>

            <article className="md:flex-1">
              <label htmlFor="clientEmail" className="label">
                Client's email address
              </label>
              <input
                type="email"
                name="clientEmail"
                id="clientEmail"
                placeholder="Client's email address"
                className="input"
                value={formik.values.clientEmail}
                onChange={formik.handleChange}
              />
              {!formik.errors.clientEmail ? (
                <small className="text-slate-600">
                  The client's email address
                </small>
              ) : (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.clientEmail}
                </small>
              )}
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article>
              <label htmlFor="clientAddress" className="label">
                Client's address
              </label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Client's address"
                className="input"
                value={formik.values.clientAddress}
                onChange={formik.handleChange}
              />
              {!formik.errors.clientAddress ? (
                <small className="text-slate-600">
                  The address of the client
                </small>
              ) : (
                <small className="text-rose-400 text-xs font-semibold">
                  {formik.errors.clientAddress}
                </small>
              )}

              <small className="text-slate-600 block">
                Read our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline text-slate-800"
                >
                  privacy policy
                </Link>
              </small>
            </article>
          </div>
        </form>
      </section>
    </>
  );
}
