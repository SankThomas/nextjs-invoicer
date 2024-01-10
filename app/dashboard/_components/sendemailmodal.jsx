"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { XIcon } from "lucide-react";
import { toast } from "react-toastify";

export default function SendEmailModal({ values }) {
  const [newClientEmail, setNewClientEmail] = useState(values.clientEmail);

  function handleSendEmail() {
    if (!newClientEmail) {
      toast.error("Please enter the client's email address");
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[200] bg-black/75">
        <div className="flex items-center justify-center h-screen">
          <article className="bg-white p-4 rounded-lg space-y-4 max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-bold flex items-center justify-between">
              Send email to client{" "}
              <span>
                <Button
                  onClick={() => values.setShowModal(false)}
                  variant="outline"
                >
                  <XIcon />
                </Button>
              </span>
            </h2>

            <form>
              <label htmlFor="email" className="label mb-2">
                Enter client email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Client's email address"
                value={newClientEmail}
                onChange={(e) => setNewClientEmail(e.target.value)}
                className="input mb-4 mt-2"
              />
              <a
                href={`mailto:${newClientEmail}?subject=Invoice for ${values.clientName} from ${values.name}&body=Hello, this is an invoice for the work commssioned and finished. Thank you.`}
                onClick={handleSendEmail}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-2 px-4 rounded inline-block"
              >
                Send email
              </a>
            </form>
          </article>
        </div>
      </div>
    </>
  );
}
