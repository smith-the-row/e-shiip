/*eslint-disable */
import { testimonies } from "@/constant/lib";
import { services } from "@/constant/service";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LatestNews />
      <Testimonials />
    </>
  );
}

//  testimonials component
const Testimonials = () => {
  return (
    <section className="bg-red-600 p-5">
      <div className="text-center text-white">
        <h2 className="font-semibold text-lg p-2">Testimonials</h2>
        <h3 className="text-5xl">
          <span className="font-semibold"> What Clients</span> are saying
        </h3>
      </div>
      <div className="flex justify-between gap-4 my-8 flex-col md:flex-row">
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="flex-1">
            <div className="bg-white p-6 leading-loose rounded capitalize">
              {testimony.testimony}
            </div>
            <div className="flex my-3 items-center gap-3">
              {/*  eslint */}
              <img
                src={testimony.img}
                alt="img"
                className="w-[15%] rounded-full"
              />
              <div>
                <h3 className="font-semibold text-white text-lg">
                  {testimony.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//  latest new component
const LatestNews = () => {
  return (
    <section className="p-6">
      <div className="text-center">
        <h3 className="text-neutral-500 font-medium capitalize">
          Recent Updates
        </h3>
        <h3 className="my-3 text-5xl text-slate-900">
          <span className="font-semibold"> Our Latest</span> News
        </h3>
      </div>
      <div className="p-3">
        <div>
          <p className="font-semibold text-red-500 my-3">Uncategorized</p>
          <h3 className="capitalize font-semibold text-slate-800 text-2xl my-2">
            Fact
          </h3>
        </div>
        <div>
          <p className="text-neutral-500">
            by <span>Admin</span> | <span>Aug 16, 2020</span>
          </p>
        </div>
        <div className="md:w-[40%] leading-loose my-3">
          For anything larger than a parcel, it can be more convenient and
          better value to arrange delivery with a courier service rather than to
          send something in the post.
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-neutral-400 my-5">Our Services</h3>
        <h3 className="text-slate-900 text-5xl">
          <span className="font-semibold">We Provide the</span> best services
        </h3>
      </div>
      <div className="p-8 md:grid grid-cols-3 gap-4 my-10">
        {services.map((service) => (
          <div key={service.id} className="flex gap-4 my-8 md:my-0">
            <div>{service.icon}</div>
            <div className="ml-5">
              <div className="font-semibold text-xl">{service.name}</div>
              <div className="mt-8">{service.about}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <header
      className="h-[70vh] relative"
      style={{
        backgroundImage: "url('/banner.jpg')",
      }}
    >
      <section className="absolute left-0 top-0 w-full h-full bg-black/60 p-8">
        <h1 className="text-white text-6xl font-semibold my-5">
          Our Vision and Target
        </h1>
        <p className="text-white leading-loose md:w-[60%] text-xl capitalize mb-8">
          to deliver high quality of innovative and customer focused solutions
          through a motivated workforce that guarantee superior return to all
          stakeholders
        </p>
        <Link
          href="/shipment"
          className="font-medium text-white w-fit py-3 px-3 rounded bg-red-700"
        >
          Track your Shipment
        </Link>
      </section>
    </header>
  );
};
