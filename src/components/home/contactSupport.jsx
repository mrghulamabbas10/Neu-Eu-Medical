import React from "react";
import TeamCard from "./ui/TeamCard";
import Link from "next/link";

export default function ContactSupport() {
  return (
    <div className="py-20 2xl:py-40 flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-5xl  text-primary capitalize text-center mb-5 font-bold">
       You deserve Providers 
 <br />
        <span className="text-burgundy">who listen.</span>
      </h2>

      <Link
        href="/contact"
        className="mt-auto w-fit px-10  border border-primary text-primary font-semibold py-2 rounded-full hover:bg-primary hover:text-white transition"
      >
        Contact Support
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 mx-auto mt-10">
        <TeamCard
          name="Ugochi Azubike"
          title="AGACNP-BC & PMHNP-BC"
          image="/images/docter1.png"
          socials={[
            { type: "facebook", url: "#" },
            { type: "tiktok", url: "#" },
            { type: "instagram", url: "#" },
            { type: "twitter", url: "#" },
          ]}
        />
        <TeamCard
          name="Joy Ikeri"
          title="DNP, AGACNP-BC"
          image="/images/docter2.png"
          socials={[
            { type: "facebook", url: "#" },
            { type: "tiktok", url: "#" },
            { type: "instagram", url: "#" },
            { type: "twitter", url: "#" },
          ]}
        />
      </div>
    </div>
  );
}
