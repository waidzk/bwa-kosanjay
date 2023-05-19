import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function MostPicked(props) {
  return (
    <section className="xl:mx-28 lg:mx-10 mt-5 p-4 font-poppins" ref={props.refMostPicked}>
      <Fade cascade>
        <h2 className="text-2xl font-semibold">Most Picked</h2>
        <div className="grid grid-rows-4 md:grid-cols-3 grid-flow-row gap-4 md:h-96 h-[40rem] mt-4">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={index === 0 ? " md:row-span-4" : " md:row-span-2"}
              >
                <Button
                  type="link"
                  className="font-semibold text-white hover:text-white"
                  href={`/properties/${item._id}`}
                >
                  <div className="card gap-4 h-full">
                    <div className="tag z-30 bg-primary absolute top-0 right-0 text-white rounded-bl-2xl p-[7px] font-semibold">
                      ${item.price}
                      <span className="font-light"> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper z-10 absolute inset-0 m-0 scale-110 duration-100 ease-in-out">
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={item.title}
                        className="h-full w-full"
                      />
                    </figure>
                    <div className="meta-wrapper p-5 z-20 inset-y-0 w-full absolute flex justify-end flex-col duration-100 translate-y-0">
                      <div className="backdrop-blur-sm p-1 rounded-sm">
                        <h5>{item.title}</h5>
                        <span className="text-white">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
