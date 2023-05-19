import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 mt-5">
    <hr className="w-full" />
    <div className="lg:mx-28 mt-5 p-5 font-poppins">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col md:items-center justify-center md:w-1/2 w-full">
          <BrandIcon/>
          <span className="text-sm text-slate-400">Enjoy your stay~</span>
        </div>
        <div className="md:grid md:col-span-3 md:grid-cols-3 mt-5 md:mt-0">
          <div className="mr-5">
            <h6 className="text-md md:mb-4 mb-1 font-semibold text-accent">For Beginners</h6>
            <ul className='text-slate-400'>
              <li>
                <Button type="link" isExternal href="/register">
                  New Account
                </Button>
              </li>
              <li>
                <Button type="link" isExternal href="/booking">
                  Book a Kosan
                </Button>
              </li>
              <li>
                <Button type="link" isExternal href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="mr-5">
            <h6 className="text-md md:mb-4 mb-1 font-semibold text-accent">Explore us</h6>
            <ul className='text-slate-400'>
              <li>
                <Button type="link" isExternal href="/register">
                  About
                </Button>
              </li>
              <li>
                <Button type="link" isExternal href="/booking">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button type="link" isExternal href="/payments">
                Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="mr-5">
            <h6 className="text-md md:mb-4 mb-1 font-semibold text-accent">Getting Touch</h6>
            <ul className='text-slate-400'>
              <li>
                <Button type="link" isExternal href="mailto:support@staycation.co.id">
                support@kosanjay.id
                </Button>
              </li>
              <li>
                <Button type="link" isExternal href="tel:+6281111222211">
                0811-1122-2211
                </Button>
              </li>
              <li>
                <span>
                Staycation Dy. Bandung
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
