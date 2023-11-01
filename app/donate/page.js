"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildrenCauseDonate from "../components/ChildrenCauseDonate";
import MWCauseDonate from "../components/MWCauseDonate";
import DPCauseDonate from "../components/DPCauseDonate";

const Donate = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/products");
    setPrices(data);
  };

  return (
    <section className="h-screen">
      <div className="h-1/6"></div>
      <div className="h-fit mx-8 grid grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-children.jpeg)` }}
          ></div>
          <h4 className="font-bold text-2xl my-2 text-center">Children</h4>
          <div className="font-bold px-4">
            We are dedicated to empowering children in crisis by providing
            essential support for their education, well-being, and personal
            development. Our efforts span from providing clothing to educational
            materials, and we collaborate directly with families, refugee
            centers, and non-governmental organizations to ensure that every
            child receives the necessary resources and care they deserve.
          </div>
          <div>{prices && <ChildrenCauseDonate prices={prices} />}</div>
        </div>

        <div className="flex flex-col">
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-medical-2.jpeg)` }}
          ></div>
          <h4 className="font-bold text-2xl my-2 text-center">
            Medical Workers
          </h4>
          <div className="font-bold px-4">
            We partner with hospitals and healthcare experts across the United
            States to gather and deliver vital medical supplies to the front
            lines, where these resources play a pivotal role in saving lives.
          </div>
          <div>{prices && <MWCauseDonate prices={prices} />}</div>
        </div>

        <div className="flex flex-col">
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-displaced.jpeg)` }}
          ></div>
          <h4 className="font-bold text-2xl my-2 text-center">
            Displaced People
          </h4>
          <div className="font-bold px-4">
            We are committed to assisting individuals who have lost their homes
            due to conflict, supporting their journey towards recovery. Our
            services encompass offering temporary shelter, providing food, and
            covering essential medical expenses for refugees and those displaced
            by crises.
          </div>
          <div>{prices && <DPCauseDonate prices={prices} />}</div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
