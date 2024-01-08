import { UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Back to dashboard</Link>
          </Button>

          <UserButton afterSignOutUrl="/" />
        </div>

        <h1>Contact us page</h1>
      </section>
    </>
  );
}
