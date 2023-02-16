const ServicesContainer = () => {
  return (
    <main className="md:grid grid-cols-3 p-6 gap-3">
      <ServicesWriteUp />
      <ServicesAside />
    </main>
  );
};

const ServicesWriteUp = () => {
  return (
    <section className="col-span-2 bg-slate-50/25 p-2 shadow-sm border">
      <div className="leading-loose">
        We support Small – Medium Scale Enterprises such as Restaurants, Retail
        shops and Other Departmental stores. We take the stress of delivery off
        your hands in order for you to focus on doing business.
      </div>
      <div className="my-4">
        <p>Our range of domestic services include</p>
        <ul className="list-disc p-8">
          <li className="my-3">Express Delivery Service</li>
          <li className="my-3">Pickup & Delivery Service</li>
          <li className="my-3">Office & Household Items Relocation.</li>
        </ul>
      </div>
      <div className="my-4 p-2">
        <h3 className="font-semibold text-xl mb-4">
          1. Express Delivery Service
        </h3>
        <p className="leading-loose">
          Our core business in CTN EXPRESS is centered on speed and safety,
          therefore we give priority to extremely urgent and time bound
          shipments so as to ensure same day delivery. Special Speed Delivery.
        </p>
        <ul className="list-decimal p-8">
          <li className="leading-loose my-2">
            Special Speed Delivery. Same day and time bound deliveries. We work
            through the week including weekends and public holidays.
          </li>
          <li className="leading-loose my-2">
            Suitable for your extremely urgent shipment such as life – saving
            drugs, legal documents and other time sensitive items.
          </li>
          <li className="leading-loose my-2">
            Very efficient service designed to provide comfort and peace of mind
            for our customers.
          </li>
          <li className="leading-loose my-2">
            30 days Credit facility to Credit Worthy Corporate organizations.
          </li>
          <li className="leading-loose my-2">
            Transparent invoice reconciliation and billing options.
          </li>
          <li className="leading-loose my-2">
            Affordable rates for return mails and reverse logistics
          </li>
          <li className="leading-loose my-2">
            Track and Trace your shipment at the comfort of your homes and
            offices.
          </li>
          <li className="leading-loose my-2">
            Free proof of deliveries for quality check of service.
          </li>
        </ul>
      </div>
      <div className="my-4 p-2">
        <h3 className="font-semibold text-xl mb-4">
          2. Pickup and Delivery Service
        </h3>
        <p className="leading-loose">
          We respond swiftly to pick up requests from all our esteemed
          customers.
        </p>
        <ul className="list-decimal p-8">
          <li className="leading-loose my-2">
            Pick up and deliver same day or as requested.
          </li>
          <li className="leading-loose my-2">
            Available through the week including weekends and public holidays.
          </li>
          <li className="leading-loose my-2">
            Suitable for extremely urgent shipments
          </li>
          <li className="leading-loose my-2">Scheduled pick up available.</li>
          <li className="leading-loose my-2">
            Home delivery services across the globe.
          </li>
          <li className="leading-loose my-2">Pay low vat inclusive</li>
          <li className="leading-loose my-2">
            Tracking facility until point of delivery.
          </li>
        </ul>
      </div>
      <div className="my-4 p-2">
        <h3 className="font-semibold text-xl mb-4">
          3. Office and HouseHold Items Relocation
        </h3>
        <p className="leading-loose">
          We offer customized household moving or office relocation plan that
          meets the requirements of all our customers. CLASSIC EXPRESS offers
          variety of assets tailored to provide exciting personalized moving
          experience. Our various plans are designed to accommodate your budget,
          time and needs.
        </p>
        <p className="leading-loose">
          We offer customized household moving or office relocation plan that
          meets the requirements of all our customers. CLASSIC EXPRESS offers
          variety of assets tailored to provide exciting personalized moving
          experience. Our various plans are designed to accommodate your budget,
          time and needs.
        </p>
      </div>
    </section>
  );
};

export const ServicesAside = () => {
  return (
    <aside className="p-3">
      <div className="bg-slate-50/25 p-5 border">
        <div className="flex">
          <input
            type="text"
            className="py-4 px-3 outline-none border rounded flex-1 "
            placeholder="search"
          />
          <button className="w-fit py-2 px-4 bg-red-500 text-white">GO</button>
        </div>
      </div>
      <div className="my-4 shadow-sm ">
        <div className="bg-slate-900 text-white p-4">
          <h3 className="uppercase font-semibold">Recent Post</h3>
        </div>
        <div className="p-3">
          <h4>Fact</h4>
        </div>
      </div>
    </aside>
  );
};

export default ServicesContainer;
