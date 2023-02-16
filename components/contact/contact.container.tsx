"use client";

import { ServicesAside } from "../services/about.services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ContactContainer = () => {
  return (
    <main className="md:grid grid-cols-3 gap-3 p-8">
      <ContactForm />
      <ServicesAside />
    </main>
  );
};

const ContactForm = () => {
  const router = useRouter();

  function receiveMessage(e: any) {
    e.preventDefault();

    toast("Message Sent", {
      position: "bottom-center",
      type: "success",
      theme: "colored",
    });

    router.push("/shipment");
  }

  return (
    <section className="col-span-2 p-4 shadow-sm border bg-slate-50/25">
      <div className="leading-loose">
        <p>Send us an email for further inquiries</p>
        <p>info.eshiip@gmail.com</p>
      </div>
      <form>
        <div className="my-8">
          <div className="my-6">
            <label htmlFor="name" className="font-semibold text-slate-800">
              Your Name (Required)
            </label>
            <input
              type="text"
              name="name"
              className="border w-full border-slate-200 rounded py-4 px-2"
            />
          </div>
          <div className="my-6">
            <label htmlFor="name" className="font-semibold text-slate-800">
              Your Email (Email)
            </label>
            <input
              type="email"
              name="email"
              className="border w-full border-slate-200 rounded py-4 px-2"
            />
          </div>
          <div className="my-6">
            <label htmlFor="name" className="font-semibold text-slate-800">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="border w-full border-slate-200 rounded py-4 px-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-semibold text-slate-800">
              Your Message
            </label>
            <textarea
              name=""
              id=""
              className="h-40 w-full rounded border border-slate-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="my-3 w-full text-white font-semibold bg-red-500 py-3 rounded"
            onClick={receiveMessage}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactContainer;
