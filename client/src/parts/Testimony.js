import Star from "elements/Star";
import React from "react";
import { Fade } from "react-awesome-reveal";

import TestimonyAccent from "assets/images/image-testimonial-frame.jpg";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <Fade>
      <section className="lg:mx-28 lg:mt-5 mt-0 lg:p-20 p-10 font-poppins">
        <div className="md:grid md:grid-cols-2 h-full w-full">
          <div className="testimonial-hero lg:flex justify-end hidden m-[30px_60px_0_30px]">
            <img
              src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
              alt="Testimonial"
              className="absolute z-20 md:w-[424.84px] md:h-[500px]"
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="absolute z-10 md:w-[424.84px] md:h-[500px] -m-10"
            />
          </div>
          <div className="flex flex-col justify-center h-[30rem]">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="text-2xl font-light my-3">{data.content}</h5>
            <span className="text-sm text-slate-400">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5 text-white shadow-md shadow-[#ffc800]"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
