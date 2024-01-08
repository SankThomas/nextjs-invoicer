"use client";

import { useState, useEffect } from "react";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

import Sidebar from "./_components/sidebar";
import Step1 from "./_components/step1";
import InvoiceView from "./_components/invoiceview";
import Step2 from "./_components/step2";
import Step3 from "./_components/step3";

import collect from "collect.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from "uuid";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function Dashboard() {
  // State values for step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // State values for step 2
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // State values for step 3
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(300000);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // Steps to change the component being rendered
  const [steps, setSteps] = useState(1);

  // Calculate the total amount
  function calculateTotal() {
    const allItems = items.map((i) => i.price);

    setTotalAmount(collect(allItems).sum());
  }

  useEffect(() => {
    calculateTotal();
  });

  // Add items form functions
  function handleAddItem(e) {
    e.preventDefault();

    if (!item || !quantity || !price) {
      toast.error("Please fill in all the inputs");
    } else {
      const newItem = {
        id: uuidv4(),
        item,
        quantity,
        price,
        total,
      };
      setItem("");
      setQuantity("");
      setPrice("");
      setTotal("");
      setItems([newItem, ...items]);
      setIsEditing(false);
      toast.success("Added new item");
    }
  }

  // Calculate items amount
  useEffect(() => {
    function calculateAmount(amount) {
      setTotal(quantity * price);
    }

    calculateAmount(total);
  }, [total, price, quantity, setTotal]);

  // Create PDF
  function createPDF() {
    const invoice = document.getElementById("pdf");
    html2canvas(invoice, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${clientName}.pdf`);
    });
  }

  // Destructure all our state values to easily pass them as props
  const values = {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    bankName,
    setBankName,
    accountNumber,
    setAccountNumber,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    item,
    setItem,
    price,
    setPrice,
    quantity,
    setQuantity,
    items,
    setItems,
    total,
    setTotal,
    totalAmount,
    setTotalAmount,
    isEditing,
    setIsEditing,
    handleAddItem,
    createPDF,
  };

  return (
    <>
      <section className="py-8 px-4 container">
        <div className="flex items-center justify-between">
          <Button variant="outline">Your Dashboard</Button>

          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="mt-16">
          <div className="absolute top-4 left-4 w-40 h-40 bg-pink-500/25 blur-[100px] -z-10"></div>

          <div className="max-w-7xl">
            <article>{/* <Sidebar /> */}</article>

            <article>
              <h1 className="text-4xl lg:text-5xl font-bold mb-16">
                Create Invoice
              </h1>

              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="flex-1">
                  {steps === 1 && <Step1 values={values} setSteps={setSteps} />}
                  {steps === 2 && <Step2 values={values} setSteps={setSteps} />}
                  {steps === 3 && <Step3 values={values} setSteps={setSteps} />}
                </div>

                <div id="pdf" className="hidden lg:block flex-1">
                  <InvoiceView values={values} />
                </div>
              </div>
            </article>
          </div>

          <div className="absolute right-4 bottom-4 w-40 h-40 bg-blue-500/25 blur-[100px] -z-10"></div>
        </div>
      </section>
    </>
  );
}
