import React from 'react'

import Breadcrumb from 'elements/Breadcrumb'

export default function PageDetailBreadcrumb({breadcrumb}) {
  return (
    <section className="xl:mx-28 mx-5 mt-5 p-4 font-poppins">
        <Breadcrumb data={breadcrumb} />
    </section>
  )
}
