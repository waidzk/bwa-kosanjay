import React from 'react'

import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <section className='flex flex-col justify-center items-center m-0 p-10'>
        <img src={CompletedIllustration} alt="completed checkout" className="w-96"/>
        <p className="text-accent text-sm mb-5 text-center">We will inform you via email later once the transaction has been accepted <br /> and you can contact the tenant</p>
    </section>
  )
}
