"use client";
import { ServicesAside } from "../services/about.services";
import { store } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";

const ShipmentContainer = () => {
  return (
    <main className="md:grid grid-cols-3 gap-3 p-6">
      <Shipment />
      <ServicesAside />
    </main>
  );
};

const Shipment = () => {
  const [trackingId, setTrackingId] = useState("");
  const [product, setProduct] = useState<null | {} | any>();

  async function findStore() {
    try {
      const docRef = doc(store, "products", `${trackingId}`);

      onSnapshot(docRef, (doc) => {
        setProduct(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="col-span-2 shadow-sm border rounded p-10">
      <h2 className="capitalize text-3xl font-semibold text-slate-800">
        Enter the Tracking No.
      </h2>
      <div className="my-6">
        <div className="flex">
          <input
            type="text"
            name="product"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 border border-slate-200 py-4 rounded px-2"
          />
          <button
            className="bg-red-500 px-3 font-bold text-white"
            onClick={findStore}
          >
            Track Result
          </button>
        </div>
        <p className="font-semibold text-slate-800 text-2xl my-4">EX: 12345 </p>
      </div>
      {product && (
        <>
          <div>
            <div className="bg-slate-900 text-white p-4 font-medium uppercase">
              Tracking Information
            </div>
            <div className="p-4 flex justify-between">
              <div>Delivery Date</div>
              <div>
                {new Date(product.delivery_date.toDate()).toDateString()}
              </div>
            </div>
            <div className="p-4 flex justify-between">
              <div>Status</div>
              <div>{product.package_status}</div>
            </div>
            <div className="p-4 flex justify-between">
              <div>Pick Up location</div>
              <div>{product.pick_up_location}</div>
            </div>
          </div>
          <div>
            <div className="bg-slate-900 text-white p-4 font-medium uppercase">
              Receiver Information
            </div>
            <div className="p-4 flex justify-between">
              <div>Receiver Name</div>
              <div>{product.receiver_name}</div>
            </div>
            <div className="p-4 flex justify-between">
              <div>Receiver Phone Number</div>
              <div>{product.receiver_number}</div>
            </div>
            <div className="p-4 flex justify-between">
              <div>Receiver Address</div>
              <div>{product.receiver_address}</div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ShipmentContainer;
