import { Button } from "../../../components/ui/button";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between py-2 px-4">
        <Button variant="outline">Invoicer</Button>

        <ul className="flex items-center justify-center gap-4">
          <li>
            <Button asChild variant="secondary">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="default">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </li>
        </ul>
      </header>
    </>
  );
}
