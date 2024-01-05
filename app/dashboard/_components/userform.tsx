"use client";

export default function UserForm() {
  return (
    <section>
      <form className="grid gap-4">
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
            />
            <small className="text-slate-600">
              It's best if this is your official name, or your company name.
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
            />
            <small className="text-slate-600">Your email is optional.</small>
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
            />
          </article>
        </div>
      </form>
    </section>
  );
}
