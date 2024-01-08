import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "600", "700" ] });

export const metadata = {
  title: {
    default: "Invoicer | Generate and Download Invoices",
    template: "%s | Invoicer | Generate and Download Invoices",
  },
  description: "Easily generate invoices for yourself and your clients.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
