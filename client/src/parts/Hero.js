import React from "react";
import { Fade } from "react-awesome-reveal";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconImmigrant from "assets/images/icons/icon-immigrant.png";
import IconLocation from "assets/images/icons/icon-location.png";
import IconKosan from "assets/images/icons/icon-kosan.png";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 12,
      behavior: "smooth",
    });
  }

  return (
    <section className="xl:mx-28 lg:mx-10 xl:mt-5 p-4 m-0 font-poppins">
      <Fade cascade>
        <div className="flex">
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="text-4xl text-accent font-bold mb-2 leading-relaxed">
              Get Your Kosan, <br />
              Quickly and Pricisely
            </h1>
            <p className="text-sm text-slate-400 md:w-[300px] w-full mb-6">
              We provide what you need to enjoy your stay. It's time to get your
              boarding house quickly and right for you.
            </p>
            <Button
              className="btn px-2 text-white w-48 shadow-md shadow-[#ffc800]"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Get your kosan now
            </Button>
            <div className="flex md:mt-10 mt-10">
              <div className="mr-auto">
                <img
                  width="36"
                  height="36"
                  src={IconImmigrant}
                  alt={`${props.data.immigrants}`}
                />
                <h6 className="font-semibold text-accent">
                  {formatNumber(props.data.immigrants)}{" "}
                  <span className="text-slate-400 font-light">immigrants</span>
                </h6>
              </div>
              <div className="mr-auto">
                <img
                  width="36"
                  height="36"
                  src={IconKosan}
                  alt={`${props.data.kosan}`}
                />
                <h6 className="font-semibold text-accent">
                  {formatNumber(props.data.kosan)}{" "}
                  <span className="text-slate-400 font-light">kosan</span>
                </h6>
              </div>
              <div className="mr-auto">
                <img
                  width="36"
                  height="36"
                  src={IconLocation}
                  alt={`${props.data.location}`}
                />
                <h6 className="font-semibold text-accent">
                  {formatNumber(props.data.location)}{" "}
                  <span className="text-slate-400 font-light">location</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:flex justify-center hidden">
            <img
              src={ImageHero}
              alt="Bed with a books"
              className="absolute z-20 w-[24rem] lg:mr-10 lg:mb-10 mr-5 mb-5"
            />
            <img
              src={ImageHeroFrame}
              alt="Bed with a books frame"
              className="absolute z-10 w-[24rem] lg:ml-10 lg:mt-10 ml-5 mt-5 mr-5"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
}
