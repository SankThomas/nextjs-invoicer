import React from "react";
import { Button } from "../../../components/ui/button";
import List from "./list";
import { ToastContainer } from "react-toastify";

export default function Step3({ values, setSteps }) {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <section className="space-y-8">
        <h2 className="font-bold text-xl">Step 3 / 3: Item Descriptions</h2>

        <form className="grid gap-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <article className="md:flex-1">
              <label htmlFor="item-name" className="label">
                Item name
              </label>
              <input
                type="text"
                name="item-name"
                id="item-name"
                placeholder="Item name"
                className="input"
                value={values.item}
                onChange={(e) => values.setItem(e.target.value)}
              />
            </article>

            <article className="md:flex-1">
              <label htmlFor="price" className="label">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price of the item"
                className="input"
                value={values.price}
                onChange={(e) => values.setPrice(e.target.value)}
              />
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article>
              <label htmlFor="quantity" className="label">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity of the items"
                className="input"
                value={values.quantity}
                onChange={(e) => values.setQuantity(e.target.value)}
              />
            </article>

            <article>
              <label htmlFor="total" className="label">
                Total
              </label>
              <p className="border bg-slate-200 py-2 rounded px-2">
                {values.total.toLocaleString()}
              </p>
            </article>
          </div>

          <Button variant="default" onClick={values.handleAddItem}>
            Add item
          </Button>

          <List items={values} />

          <article className="md:flex-1">
            <label htmlFor="notes" className="label">
              Additional notes
            </label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="20"
              className="textarea"
              value={values.notes}
              onChange={(e) => values.setNotes(e.target.value)}
              placeholder="Important information the client should know about"
            ></textarea>
          </article>
        </form>

        <ul className="flex flex-wrap items-center justify-between gap-4">
          <li>
            <Button
              onClick={() => {
                setSteps(2);
                window.scrollTo(0, 0);
              }}
              variant="outline"
            >
              <button>Previous step</button>
            </Button>
          </li>

          <li>
            <Button variant="default">Download Invoice</Button>
          </li>
        </ul>
      </section>
    </>
  );
}
