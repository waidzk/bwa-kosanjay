// import React, { Component } from "react";

// import Breadcrumb from "elements/Breadcrumb";

// export default class Example extends Component {
//   render() {
//     const breadcrumb = [
//       { pageTitle: "Home", pageHref: ""},
//       { pageTitle: "Kosan Details", pageHref: "" }
//   ];

//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <Breadcrumb data={breadcrumb} />
//       </div>
//     );
//   }
// }

// import React, { useEffect, useState } from "react";
// import { DatePicker } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// export default function Example() {
//   const [date, setDate] = useState(null);

//   useEffect(() => {
//     console.log(date);
//   }, [date]);

//   return (
//     <DatePicker
//       placeholder="Select Date"
//       value={date}
//       onChange={setDate}
//       disabledDate={(date) => isBefore(date, new Date())}
//     />
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { DatePicker, InputGroup } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// export default function Example() {
//   const [data, setData] = useState({
//     date: {
//       startDate: new Date(),
//       endDate: new Date(),
//     },
//     meetDate: new Date(),
//   });



//   function updateMeetDate(date) {
//         setData((prev) => ({
//           ...prev,
//           date: {
//             ...prev.date,
//           },
//           meetDate: date,
//         }))
//     }
    
//   function updateStartDate(date) {
//     setData((prev) => ({
//       ...prev,
//       date: {
//         ...prev.date,
//         startDate: date,
//       },
//     }));
//   }

//   function updateEndDate(date) {
//     setData((prev) => ({
//       ...prev,
//       date: {
//         ...prev.date,
//         endDate: date,
//       },
//     }));
//   }

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   //   return (
//   //     <div className="form-control">
//   //   <label className="label">
//   //     <span className="label-text">Your Email</span>
//   //   </label>
//   //   <label className="input-group">
//   //     <span>Email</span>
//   //     <input type="text" placeholder="info@site.com" name="input" onChange={updateData} className="input input-bordered" />
//   //   </label>
//   // </div>
//   // const [startDate, setStartDate] = useState(new Date());

//   return (
//     <>
//       <DatePicker
//         value={data.meetDate}
//         onChange={(date) => updateMeetDate(date)}
//       />
//       <InputGroup style={{ width: 428 }}>
//         <DatePicker
//           value={data.date.startDate}
//           onChange={(date) => updateStartDate(date)}
//           format="yyyy-MM"
//           block
//           appearance="subtle"
//           style={{ width: 230 }}
//         />
//         <InputGroup.Addon>至</InputGroup.Addon>
//         <DatePicker
//           value={data.date.endDate}
//           onChange={(date) => updateEndDate(date)}
//           format="yyyy-MM"
//           block
//           appearance="subtle"
//           style={{ width: 230 }}
//         />
//       </InputGroup>
//     </>
//     // <DatePicker selected={data.meetDate} onChange={(date) => updateDateMeet(date)} name="hhh" />
//   );
// }
