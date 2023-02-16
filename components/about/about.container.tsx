import { ServicesAside } from "../services/about.services";

const AboutContainer = () => {
  return (
    <main className="md:grid grid-cols-3 gap-4 p-6">
      <AboutWriteUp />
      <ServicesAside />
    </main>
  );
};

const AboutWriteUp = () => {
  return (
    <section className="col-span-2 bg-slate-50/25 p-4 border">
      <div className="leading-loose my-2">
        Classic Express Delivery and Logistics Company is the foremost
        indigenous ONE – STOP courier Logistics Company founded in 1997 with the
        main focus of offering NEED – driven customized and cost effective
        logistic solutions fully licensed in compliance with all statutory and
        regulatory obligations.
      </div>
      <div className="leading-loose my-2">
        We are VALUE – driven, well known for mutually beneficial business
        relationship with our customers, very proficient in handling and
        delivering of mails, parcels as well as cargo haulage deliverables
        locally and internationally.
      </div>
      <div className="my-6">
        <div>
          <h4 className="my-2 capitalize text-2xl font-semibold text-slate-900">
            Our Market Industry Differential
          </h4>
          <div className="leading-loose">
            Our strength lies in the ability to deliver within agreed time in
            all the major towns and cities in all over the globe, while it takes
            few days to deliver to non-Airport towns and cities across the
            globe. We deploy the unique logistics might of our parent company
            and our international partners to ensure excellent service delivery
            while leveraging on our highly trained and motivated work force with
            over 25 years of industry experience, entrenching best practices and
            deploying cutting edge technology to create and to sustain our
            market niche.
          </div>
        </div>
        <div>
          <h4 className="my-2 capitalize text-2xl font-semibold text-slate-900">
            Vision Statement
          </h4>
          <div className="p-4 border-l-4 border-red-500">
            To be the best logistics and delivery company
          </div>
        </div>
        <div className="my-5">
          <h4 className="my-2 capitalize text-2xl font-semibold text-slate-900">
            Mission Statement
          </h4>
          <div className="p-4 border-l-4 border-red-500">
            to deliver high quality of innovative and customer focused solutions
            through a motivated workforce that guarantee superior return to all
            stakeholders
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
