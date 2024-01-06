import React from "react";
import { Button } from "../../../components/ui/button";

export default function Step2({ values, setSteps }) {
  return (
    <>
      <section className="space-y-8">
        <h2 className="font-bold text-xl">Step 2 / 3: Client details</h2>

        <form className="grid gap-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <article className="md:flex-1">
              <label htmlFor="client-name" className="label">
                Client's name
              </label>
              <input
                type="text"
                name="client-name"
                id="client-name"
                placeholder="Client's name"
                className="input"
                value={values.clientName}
                onChange={(e) => values.setClientName(e.target.value)}
              />
              <small className="text-slate-600">
                The name of the client that will appear on the invoice
              </small>
            </article>

            <article className="md:flex-1">
              <label htmlFor="client-email" className="label">
                Client's email address
              </label>
              <input
                type="email"
                name="client-email"
                id="client-email"
                placeholder="Client's email address"
                className="input"
                value={values.clientEmail}
                onChange={(e) => values.setClientEmail(e.target.value)}
              />
              <small className="text-slate-600">Your email is optional.</small>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article>
              <label htmlFor="client-address" className="label">
                Client's address
              </label>
              <input
                type="text"
                name="client-address"
                id="client-address"
                placeholder="Client's address"
                className="input"
                value={values.clientAddress}
                onChange={(e) => values.setClientAddress(e.target.value)}
              />
              <small className="text-slate-600">Read privacy policy</small>
            </article>
          </div>
        </form>

        <ul className="flex flex-wrap items-center justify-between gap-4">
          <li>
            <Button
              onClick={() => {
                setSteps(1);
                window.scrollTo(0, 0);
              }}
              variant="outline"
            >
              <button>Previous step</button>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setSteps(3);
                window.scrollTo(0, 0);
              }}
            >
              <button>Next step</button>
            </Button>
          </li>
        </ul>
      </section>
    </>
  );
}
