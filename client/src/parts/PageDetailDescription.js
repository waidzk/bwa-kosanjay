import React from "react";
import HtmlReactParser from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <section className="font-poppins w-full mt-2">
      <div className="text-accent text-lg">
        {HtmlReactParser(data.description)}
      </div>
      <div className="icons grid grid-cols-3">
        {data.featureId.length === 0
          ? "Tidak ada Feature"
          : data.featureId.map((feature, index) => {
              return (
                <span key={`feature-${index}`} className="m-5">
                  {feature.name === "Wifi" ? (
                    <img
                      src="/images/icon-wifi.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  {feature.name === "Bathroom" ? (
                    <img
                      src="/images/icon-bathroom.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  {feature.name === "Kitchen" ? (
                    <img
                      src="/images/icon-kitchen.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  {feature.name === "Living Room" ? (
                    <img
                      src="/images/icon-livingroom.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  {feature.name === "Television" ? (
                    <img
                      src="/images/icon-television.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  {feature.name === "Air Conditioner" ? (
                    <img
                      src="/images/icon-ac.svg"
                      alt={feature.name}
                      className="w-10"
                    />
                  ) : "" }
                  <span>
                    {feature.qty} {feature.name}
                  </span>
                </span>
              );
            })}
      </div>
    </section>
  );
}
